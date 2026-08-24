#!/usr/bin/env python3
"""Validate the versioned editorial evidence and asset ledgers."""

from __future__ import annotations

import argparse
import csv
import hashlib
import re
import sys
from datetime import date
from pathlib import Path
from urllib.parse import urlparse


if sys.version_info < (3, 9):
    detected = ".".join(str(part) for part in sys.version_info[:3])
    print(
        f"Python >= 3.9 est requis (version détectée : {detected}).",
        file=sys.stderr,
    )
    raise SystemExit(2)


ROOT = Path(__file__).resolve().parent.parent
EVIDENCE_PATH = ROOT / "research/evidence.csv"
ASSET_PATH = ROOT / "research/assets.csv"
QUESTION_PATH = ROOT / "research/questions.csv"
PUBLIC_ARTICLE_MEDIA_ROOT = ROOT / "site/public/images/articles"
PUBLIC_ARTICLE_MEDIA_PREFIX = "/images/articles/"

EVIDENCE_FIELDS = (
    "evidence_id",
    "product_version",
    "source_type",
    "source_title",
    "publisher",
    "source_url",
    "published_on",
    "checked_on",
    "timecode_start",
    "timecode_end",
    "evidence_class",
    "observation",
    "conditions",
    "sponsorship",
    "corroborating_ids",
    "confidence",
    "article_ids",
)
ASSET_FIELDS = (
    "asset_id",
    "evidence_ids",
    "source_url",
    "timecode",
    "acquisition_mode",
    "asset_type",
    "rights_holder_label",
    "rights_status",
    "commercial_use",
    "ai_transform",
    "web_scope",
    "social_scope",
    "territory",
    "valid_from",
    "valid_until",
    "attribution",
    "identifiable_people",
    "people_clearance",
    "third_party_elements",
    "ai_provider",
    "provider_training",
    "provider_retention",
    "raw_sha256",
    "derived_sha256",
    "human_validation",
    "permission_proof",
    "permission_proof_sha256",
    "publication_url",
    "checked_on",
)
QUESTION_FIELDS = (
    "question_id",
    "source_type",
    "source_url",
    "published_on",
    "checked_on",
    "question",
    "categories",
    "product_scope",
    "purchase_stage",
    "article_ids",
)

SOURCE_TYPES = {
    "manufacturer",
    "youtube",
    "merchant",
    "forum",
    "interview",
    "fouranu",
    "other",
}
EVIDENCE_CLASSES = {"FAB", "T-MES", "T-OBS", "FAN-SYN", "FAN-INF"}
CONFIDENCE_VALUES = {"low", "medium", "high"}
ACQUISITION_MODES = {
    "rights-holder-file",
    "authorized-frame-capture",
    "youtube-embed",
    "fouranu-original",
    "ai-generated",
    "not-acquired",
}
ASSET_TYPES = {
    "embed",
    "licensed-frame",
    "ai-illustration",
    "ai-original",
    "fouranu-original",
    "quarantine",
}
RIGHTS_STATUSES = {
    "not-requested",
    "requested",
    "granted",
    "denied",
    "expired",
    "service-permitted",
    "original",
}
BOOLEAN_VALUES = {"yes", "no", "not-applicable"}
IDENTIFIABLE_PEOPLE_VALUES = {"yes", "no", "unknown", "not-applicable"}
PEOPLE_CLEARANCE_VALUES = {"granted", "missing", "unknown", "not-applicable"}
PROVIDER_TRAINING_VALUES = {"disabled", "explicitly-authorized"}
HUMAN_VALIDATION_VALUES = {"pending", "approved", "rejected", "not-applicable"}
QUESTION_SOURCE_TYPES = {
    "forum",
    "youtube",
    "manufacturer-faq",
    "merchant-faq",
    "search",
    "interview",
    "other",
}
QUESTION_CATEGORIES = {
    "accessories",
    "budget",
    "durability",
    "energy",
    "gas-compatibility",
    "heat-up",
    "indoor-outdoor",
    "maintenance",
    "portability",
    "price-value",
    "recovery",
    "safety",
    "size",
    "space",
    "throughput",
    "versatility",
    "warranty",
    "weather",
}
PURCHASE_STAGES = {"discover", "compare", "validate", "operate"}
TIMECODE_PATTERN = re.compile(r"^(?:[0-9]{1,2}:)?[0-5]?[0-9]:[0-5][0-9]$")
SHA256_PATTERN = re.compile(r"^[0-9a-f]{64}$")
EVIDENCE_ID_PATTERN = re.compile(r"^EV-[0-9]{4}$")
ASSET_ID_PATTERN = re.compile(r"^AS-[0-9]{4}$")
QUESTION_ID_PATTERN = re.compile(r"^Q-[0-9]{4}$")
ARTICLE_ID_PATTERN = re.compile(r"^[A-Z][A-Z0-9-]*-[0-9]{3,4}$")


def load_csv(path: Path, expected_fields: tuple[str, ...], errors: list[str]) -> list[dict[str, str]]:
    if not path.is_file():
        errors.append(f"registre absent : {path.relative_to(ROOT)}")
        return []

    with path.open(encoding="utf-8", newline="") as handle:
        reader = csv.DictReader(handle)
        actual_fields = tuple(reader.fieldnames or ())
        if actual_fields != expected_fields:
            errors.append(
                f"{path.relative_to(ROOT)} : en-tête invalide ; attendu "
                + ",".join(expected_fields)
            )
            return []
        return [
            {key: (value or "").strip() for key, value in row.items()}
            for row in reader
            if any((value or "").strip() for value in row.values())
        ]


def valid_date(value: str) -> bool:
    if not value:
        return True
    try:
        date.fromisoformat(value)
    except ValueError:
        return False
    return True


def valid_url(value: str) -> bool:
    try:
        parsed = urlparse(value)
        return bool(
            parsed.scheme == "https"
            and parsed.hostname
            and not parsed.username
            and not parsed.password
        )
    except ValueError:
        return False


def url_host(value: str) -> str:
    try:
        return (urlparse(value).hostname or "").casefold()
    except ValueError:
        return ""


def web_scope_hosts(value: str) -> set[str]:
    entries = {item.strip() for item in value.split(";") if item.strip()}
    return {url_host(item) for item in entries if valid_web_origin(item)}


def valid_web_origin(value: str) -> bool:
    if not valid_url(value):
        return False
    parsed = urlparse(value)
    return parsed.path in {"", "/"} and not parsed.query and not parsed.fragment


def split_ids(value: str) -> set[str]:
    return {item.strip() for item in value.split(";") if item.strip()}


def timecode_seconds(value: str) -> int:
    parts = [int(part) for part in value.split(":")]
    if len(parts) == 2:
        minutes, seconds = parts
        return minutes * 60 + seconds
    hours, minutes, seconds = parts
    return hours * 3600 + minutes * 60 + seconds


def check_evidence(rows: list[dict[str, str]], errors: list[str]) -> set[str]:
    identifiers: set[str] = set()
    rows_by_id: dict[str, dict[str, str]] = {}
    for number, row in enumerate(rows, start=2):
        prefix = f"research/evidence.csv:{number}"
        identifier = row["evidence_id"]
        if not EVIDENCE_ID_PATTERN.fullmatch(identifier):
            errors.append(f"{prefix} : evidence_id invalide")
        elif identifier in identifiers:
            errors.append(f"{prefix} : evidence_id dupliqué : {identifier}")
        identifiers.add(identifier)
        rows_by_id[identifier] = row

        if row["source_type"] not in SOURCE_TYPES:
            errors.append(f"{prefix} : source_type inconnu")
        if row["evidence_class"] not in EVIDENCE_CLASSES:
            errors.append(f"{prefix} : evidence_class inconnue")
        if row["confidence"] not in CONFIDENCE_VALUES:
            errors.append(f"{prefix} : confidence doit valoir low, medium ou high")
        if row["source_url"] and not valid_url(row["source_url"]):
            errors.append(f"{prefix} : source_url doit être une URL HTTPS")
        if row["source_type"] != "fouranu" and not row["source_url"]:
            errors.append(f"{prefix} : une source tierce exige source_url")
        if row["source_type"] != "fouranu":
            for field in ("product_version", "source_title", "publisher"):
                if not row[field]:
                    errors.append(f"{prefix} : {field} est requis pour une source tierce")
        for field in ("published_on", "checked_on"):
            if not valid_date(row[field]):
                errors.append(f"{prefix} : {field} doit être au format YYYY-MM-DD")
        if not row["checked_on"]:
            errors.append(f"{prefix} : checked_on est requis")
        if not row["observation"]:
            errors.append(f"{prefix} : observation est requise")
        for field in ("timecode_start", "timecode_end"):
            if row[field] and not TIMECODE_PATTERN.fullmatch(row[field]):
                errors.append(f"{prefix} : {field} invalide")
        if (
            row["source_type"] == "youtube"
            and row["evidence_class"] in {"T-MES", "T-OBS"}
            and not row["timecode_start"]
        ):
            errors.append(f"{prefix} : une preuve YouTube tierce exige un timecode")
        if row["source_type"] == "youtube":
            for field in ("published_on", "sponsorship"):
                if not row[field]:
                    errors.append(f"{prefix} : {field} est requis pour une source YouTube")
        if row["evidence_class"] == "T-MES" and not row["conditions"]:
            errors.append(f"{prefix} : une mesure tierce exige ses conditions")
        if row["evidence_class"] == "FAB" and row["source_type"] != "manufacturer":
            errors.append(f"{prefix} : FAB exige source_type manufacturer")
        if row["source_type"] == "manufacturer" and row["evidence_class"] != "FAB":
            errors.append(f"{prefix} : une source fabricant exige evidence_class FAB")
        if (
            row["evidence_class"] in {"T-MES", "T-OBS"}
            and row["source_type"] == "fouranu"
        ):
            errors.append(
                f"{prefix} : une preuve tierce ne peut pas avoir source_type fouranu"
            )
        if (
            row["evidence_class"] in {"FAN-SYN", "FAN-INF"}
            and row["source_type"] != "fouranu"
        ):
            errors.append(
                f"{prefix} : une classe Four à Nu exige source_type fouranu"
            )

        linked_ids = split_ids(row["corroborating_ids"])
        if identifier in linked_ids:
            errors.append(f"{prefix} : une preuve ne peut pas se corroborer elle-même")
        if row["evidence_class"] == "FAN-SYN" and len(linked_ids) < 2:
            errors.append(f"{prefix} : une synthèse exige au moins deux preuves liées")
        if row["evidence_class"] == "FAN-INF" and not linked_ids:
            errors.append(f"{prefix} : une inférence exige au moins une preuve liée")

        if row["timecode_end"] and not row["timecode_start"]:
            errors.append(f"{prefix} : timecode_end exige timecode_start")
        if (
            row["timecode_start"]
            and row["timecode_end"]
            and TIMECODE_PATTERN.fullmatch(row["timecode_start"])
            and TIMECODE_PATTERN.fullmatch(row["timecode_end"])
            and timecode_seconds(row["timecode_end"])
            < timecode_seconds(row["timecode_start"])
        ):
            errors.append(f"{prefix} : timecode_end précède timecode_start")

    for number, row in enumerate(rows, start=2):
        linked_ids = split_ids(row["corroborating_ids"])
        for linked in linked_ids:
            if linked not in identifiers:
                errors.append(
                    f"research/evidence.csv:{number} : corroboration inconnue : {linked}"
                )
        if row["evidence_class"] == "FAN-SYN":
            independent_sources = {
                rows_by_id[linked]["publisher"].casefold()
                or rows_by_id[linked]["source_url"]
                for linked in linked_ids
                if linked in rows_by_id
                and rows_by_id[linked]["source_type"] != "fouranu"
            }
            if len(independent_sources) < 2:
                errors.append(
                    f"research/evidence.csv:{number} : une synthèse exige deux sources tierces distinctes"
                )

    graph = {
        identifier: split_ids(row["corroborating_ids"]) & identifiers
        for identifier, row in rows_by_id.items()
    }
    visiting: set[str] = set()
    visited: set[str] = set()

    def visit(identifier: str) -> bool:
        if identifier in visiting:
            return True
        if identifier in visited:
            return False
        visiting.add(identifier)
        cycle_found = any(visit(linked) for linked in graph.get(identifier, set()))
        visiting.remove(identifier)
        visited.add(identifier)
        return cycle_found

    if any(visit(identifier) for identifier in identifiers):
        errors.append("research/evidence.csv : cycle détecté dans les corroborations")
    return identifiers


def check_questions(rows: list[dict[str, str]], errors: list[str]) -> set[str]:
    identifiers: set[str] = set()
    normalized_questions: set[str] = set()
    for number, row in enumerate(rows, start=2):
        prefix = f"research/questions.csv:{number}"
        identifier = row["question_id"]
        if not QUESTION_ID_PATTERN.fullmatch(identifier):
            errors.append(f"{prefix} : question_id invalide")
        elif identifier in identifiers:
            errors.append(f"{prefix} : question_id dupliqué : {identifier}")
        identifiers.add(identifier)

        if row["source_type"] not in QUESTION_SOURCE_TYPES:
            errors.append(f"{prefix} : source_type inconnu")
        if row["source_url"] and not valid_url(row["source_url"]):
            errors.append(f"{prefix} : source_url doit être une URL HTTPS")
        if row["source_type"] != "interview" and not row["source_url"]:
            errors.append(f"{prefix} : une question publique exige source_url")
        for field in ("published_on", "checked_on"):
            if not valid_date(row[field]):
                errors.append(f"{prefix} : {field} doit être au format YYYY-MM-DD")
        if not row["published_on"]:
            errors.append(f"{prefix} : published_on est requis")
        if not row["checked_on"]:
            errors.append(f"{prefix} : checked_on est requis")
        if len(row["question"]) < 15:
            errors.append(f"{prefix} : question paraphrasée trop courte")
        normalized = " ".join(row["question"].casefold().split())
        if normalized in normalized_questions:
            errors.append(f"{prefix} : question paraphrasée dupliquée")
        normalized_questions.add(normalized)

        categories = split_ids(row["categories"])
        if not categories:
            errors.append(f"{prefix} : au moins une catégorie est requise")
        for category in categories:
            if category not in QUESTION_CATEGORIES:
                errors.append(f"{prefix} : catégorie inconnue : {category}")
        if not row["product_scope"]:
            errors.append(f"{prefix} : product_scope est requis")
        if row["purchase_stage"] not in PURCHASE_STAGES:
            errors.append(
                f"{prefix} : purchase_stage doit valoir discover, compare, validate ou operate"
            )
        article_ids = split_ids(row["article_ids"])
        if not article_ids:
            errors.append(f"{prefix} : au moins un article_id est requis")
        for article_id in article_ids:
            if not ARTICLE_ID_PATTERN.fullmatch(article_id):
                errors.append(f"{prefix} : article_id invalide : {article_id}")
    return identifiers


def check_assets(
    rows: list[dict[str, str]],
    evidence_ids: set[str],
    errors: list[str],
    require_private_proofs: bool = False,
) -> None:
    identifiers: set[str] = set()
    for number, row in enumerate(rows, start=2):
        prefix = f"research/assets.csv:{number}"
        identifier = row["asset_id"]
        if not ASSET_ID_PATTERN.fullmatch(identifier):
            errors.append(f"{prefix} : asset_id invalide")
        elif identifier in identifiers:
            errors.append(f"{prefix} : asset_id dupliqué : {identifier}")
        identifiers.add(identifier)

        if row["acquisition_mode"] not in ACQUISITION_MODES:
            errors.append(f"{prefix} : acquisition_mode inconnu")
        if row["asset_type"] not in ASSET_TYPES:
            errors.append(f"{prefix} : asset_type inconnu")
        if row["rights_status"] not in RIGHTS_STATUSES:
            errors.append(f"{prefix} : rights_status inconnu")
        for field in ("commercial_use", "ai_transform"):
            if row[field] not in BOOLEAN_VALUES:
                errors.append(f"{prefix} : {field} doit valoir yes, no ou not-applicable")
        if row["source_url"] and not valid_url(row["source_url"]):
            errors.append(f"{prefix} : source_url doit être une URL HTTPS")
        if row["timecode"] and not TIMECODE_PATTERN.fullmatch(row["timecode"]):
            errors.append(f"{prefix} : timecode invalide")
        for field in ("valid_from", "valid_until", "checked_on"):
            if not valid_date(row[field]):
                errors.append(f"{prefix} : {field} doit être au format YYYY-MM-DD")
        if not row["checked_on"]:
            errors.append(f"{prefix} : checked_on est requis")
        if row["identifiable_people"] and row["identifiable_people"] not in IDENTIFIABLE_PEOPLE_VALUES:
            errors.append(f"{prefix} : identifiable_people inconnu")
        if row["people_clearance"] and row["people_clearance"] not in PEOPLE_CLEARANCE_VALUES:
            errors.append(f"{prefix} : people_clearance inconnu")
        if row["human_validation"] and row["human_validation"] not in HUMAN_VALIDATION_VALUES:
            errors.append(f"{prefix} : human_validation inconnu")
        for linked in split_ids(row["evidence_ids"]):
            if linked not in evidence_ids:
                errors.append(f"{prefix} : evidence_id inconnu : {linked}")
        for field in ("raw_sha256", "derived_sha256", "permission_proof_sha256"):
            if row[field] and not SHA256_PATTERN.fullmatch(row[field]):
                errors.append(f"{prefix} : {field} doit être un SHA-256 minuscule")

        public = bool(row["publication_url"])
        if public and not valid_url(row["publication_url"]):
            errors.append(f"{prefix} : publication_url doit être une URL HTTPS")
        if public and row["asset_type"] == "quarantine":
            errors.append(f"{prefix} : un média en quarantaine ne peut pas être publié")
        if public and row["rights_status"] not in {
            "granted",
            "service-permitted",
            "original",
        }:
            errors.append(f"{prefix} : publication sans statut de droit publiable")
        if (
            row["rights_status"] == "service-permitted"
            and row["asset_type"] != "embed"
        ):
            errors.append(
                f"{prefix} : service-permitted est réservé au lecteur officiel"
            )
        if row["rights_status"] == "original" and row["asset_type"] not in {
            "fouranu-original",
            "ai-original",
        }:
            errors.append(f"{prefix} : original est réservé aux médias Four à Nu")

        linked_evidence = split_ids(row["evidence_ids"])
        if (
            row["asset_type"] not in {"fouranu-original", "ai-original"}
            and not linked_evidence
        ):
            errors.append(f"{prefix} : un média tiers exige au moins un evidence_id")
        if public and row["asset_type"] != "embed" and not (
            row["raw_sha256"] or row["derived_sha256"]
        ):
            errors.append(f"{prefix} : un média public non embarqué exige un SHA-256")

        if row["rights_status"] == "granted":
            required = (
                "rights_holder_label",
                "commercial_use",
                "web_scope",
                "territory",
                "valid_from",
                "attribution",
                "identifiable_people",
                "people_clearance",
                "third_party_elements",
            )
            for field in required:
                if not row[field]:
                    errors.append(f"{prefix} : {field} requis pour un droit accordé")
            if row["commercial_use"] != "yes":
                errors.append(f"{prefix} : l'usage public Four à Nu exige commercial_use=yes")
            if row["permission_proof"]:
                if not row["permission_proof_sha256"]:
                    errors.append(
                        f"{prefix} : permission_proof_sha256 requis lorsqu'un chemin de preuve est déclaré"
                    )
                private_root = (ROOT / "research/private/permissions").resolve()
                proof_path = (ROOT / row["permission_proof"]).resolve()
                try:
                    proof_path.relative_to(private_root)
                except ValueError:
                    errors.append(
                        f"{prefix} : permission_proof doit rester sous research/private/permissions/"
                    )
                else:
                    if require_private_proofs and not proof_path.is_file():
                        errors.append(
                            f"{prefix} : preuve privée absente : {row['permission_proof']}"
                        )
                    elif require_private_proofs and row["permission_proof_sha256"]:
                        digest = hashlib.sha256(proof_path.read_bytes()).hexdigest()
                        if digest != row["permission_proof_sha256"]:
                            errors.append(f"{prefix} : SHA-256 de la preuve privée différent")
            elif row["permission_proof_sha256"]:
                errors.append(
                    f"{prefix} : permission_proof requis lorsqu'un SHA-256 de preuve est déclaré"
                )
            if (
                row["valid_until"]
                and valid_date(row["valid_until"])
                and date.fromisoformat(row["valid_until"]) < date.today()
            ):
                errors.append(f"{prefix} : le droit accordé est arrivé à expiration")
            if (
                public
                and row["valid_from"]
                and valid_date(row["valid_from"])
                and date.fromisoformat(row["valid_from"]) > date.today()
            ):
                errors.append(f"{prefix} : le droit accordé n'est pas encore actif")
            if row["web_scope"] and len(web_scope_hosts(row["web_scope"])) != len(
                {item.strip() for item in row["web_scope"].split(";") if item.strip()}
            ):
                errors.append(
                    f"{prefix} : web_scope doit contenir des origines HTTPS séparées par des points-virgules"
                )
            if public and url_host(row["publication_url"]) not in web_scope_hosts(
                row["web_scope"]
            ):
                errors.append(f"{prefix} : publication_url n'est pas autorisée par web_scope")
            if row["identifiable_people"] == "yes" and row["people_clearance"] != "granted":
                errors.append(f"{prefix} : les personnes identifiables exigent un accord enregistré")
            if row["identifiable_people"] == "no" and row["people_clearance"] != "not-applicable":
                errors.append(f"{prefix} : people_clearance doit valoir not-applicable sans personne identifiable")
            if row["identifiable_people"] in {"unknown", "not-applicable"}:
                errors.append(f"{prefix} : la présence de personnes doit être résolue avant accord")

        if row["asset_type"] == "ai-illustration":
            if row["rights_status"] != "granted" or row["ai_transform"] != "yes":
                errors.append(
                    f"{prefix} : une illustration IA exige droits accordés et ai_transform=yes"
                )
            for field in ("ai_provider", "provider_training", "provider_retention"):
                if not row[field]:
                    errors.append(f"{prefix} : {field} requis pour une illustration IA")
            if not row["raw_sha256"] or not row["derived_sha256"]:
                errors.append(f"{prefix} : les SHA-256 source et dérivé sont requis")
            if row["acquisition_mode"] not in {
                "rights-holder-file",
                "authorized-frame-capture",
            }:
                errors.append(
                    f"{prefix} : une illustration IA dérivée exige rights-holder-file ou authorized-frame-capture"
                )
            if row["provider_training"] not in PROVIDER_TRAINING_VALUES:
                errors.append(
                    f"{prefix} : provider_training doit valoir disabled ou explicitly-authorized"
                )
            if row["identifiable_people"] != "no":
                errors.append(
                    f"{prefix} : Four à Nu interdit les personnes identifiables dans une entrée IA dérivée"
                )
            if row["human_validation"] != "approved":
                errors.append(f"{prefix} : une illustration IA exige human_validation approved")

        if row["asset_type"] == "ai-original":
            if row["acquisition_mode"] != "ai-generated":
                errors.append(
                    f"{prefix} : un original IA exige acquisition_mode ai-generated"
                )
            if row["rights_status"] != "original":
                errors.append(f"{prefix} : un original IA exige rights_status original")
            for field in ("ai_provider", "provider_training", "provider_retention"):
                if not row[field]:
                    errors.append(f"{prefix} : {field} requis pour un original IA")
            if row["provider_training"] not in PROVIDER_TRAINING_VALUES:
                errors.append(
                    f"{prefix} : provider_training doit valoir disabled ou explicitly-authorized"
                )
            if row["raw_sha256"]:
                errors.append(f"{prefix} : un original IA ne doit pas déclarer raw_sha256")
            if not row["derived_sha256"]:
                errors.append(f"{prefix} : derived_sha256 requis pour un original IA")
            if row["human_validation"] != "approved":
                errors.append(f"{prefix} : un original IA exige human_validation approved")

        if (
            row["acquisition_mode"] == "ai-generated"
            and row["asset_type"] != "ai-original"
        ):
            errors.append(
                f"{prefix} : acquisition_mode ai-generated est réservé aux originaux IA"
            )

        if row["asset_type"] == "embed" and row["acquisition_mode"] != "youtube-embed":
            errors.append(f"{prefix} : un embed exige acquisition_mode youtube-embed")
        if row["asset_type"] == "embed" and not row["source_url"]:
            errors.append(f"{prefix} : un embed exige source_url")
        if row["asset_type"] == "embed" and row["rights_status"] != "service-permitted":
            errors.append(f"{prefix} : un embed exige rights_status service-permitted")
        if (
            row["asset_type"] == "licensed-frame"
            and row["acquisition_mode"] != "rights-holder-file"
        ):
            errors.append(
                f"{prefix} : un photogramme licencié exige acquisition_mode rights-holder-file"
            )
        if row["asset_type"] == "licensed-frame":
            if row["rights_status"] != "granted":
                errors.append(f"{prefix} : un photogramme licencié exige rights_status granted")
            for field in ("source_url", "timecode", "raw_sha256"):
                if not row[field]:
                    errors.append(f"{prefix} : {field} requis pour un photogramme licencié")
        if (
            row["asset_type"] == "fouranu-original"
            and row["acquisition_mode"] != "fouranu-original"
        ):
            errors.append(
                f"{prefix} : un original Four à Nu exige acquisition_mode fouranu-original"
            )
        if row["asset_type"] == "fouranu-original" and row["rights_status"] != "original":
            errors.append(f"{prefix} : un original Four à Nu exige rights_status original")
        if row["asset_type"] == "quarantine" and row["acquisition_mode"] != "not-acquired":
            errors.append(f"{prefix} : une référence en quarantaine ne doit pas être acquise")


def check_public_article_media(
    rows: list[dict[str, str]],
    errors: list[str],
    media_root: Path = PUBLIC_ARTICLE_MEDIA_ROOT,
) -> None:
    public_files = {
        PUBLIC_ARTICLE_MEDIA_PREFIX + path.relative_to(media_root).as_posix()
        for path in media_root.rglob("*")
        if path.is_file()
    } if media_root.is_dir() else set()
    registered_files = {
        urlparse(row["publication_url"]).path
        for row in rows
        if row["publication_url"]
        and urlparse(row["publication_url"]).path.startswith(PUBLIC_ARTICLE_MEDIA_PREFIX)
    }

    for path in sorted(public_files - registered_files):
        errors.append(
            f"site/public{path} : média d'article public absent de research/assets.csv"
        )
    for path in sorted(registered_files - public_files):
        errors.append(
            f"research/assets.csv : média d'article enregistré mais fichier public absent : {path}"
        )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--require-private-proofs",
        action="store_true",
        help="Vérifie localement l'existence et le SHA-256 des accords privés.",
    )
    args = parser.parse_args()
    errors: list[str] = []
    evidence_rows = load_csv(EVIDENCE_PATH, EVIDENCE_FIELDS, errors)
    asset_rows = load_csv(ASSET_PATH, ASSET_FIELDS, errors)
    question_rows = load_csv(QUESTION_PATH, QUESTION_FIELDS, errors)
    evidence_ids = check_evidence(evidence_rows, errors)
    check_questions(question_rows, errors)
    check_assets(
        asset_rows,
        evidence_ids,
        errors,
        require_private_proofs=args.require_private_proofs,
    )
    check_public_article_media(asset_rows, errors)

    if errors:
        for error in errors:
            print(error, file=sys.stderr)
        return 1

    proof_status = (
        "preuves privées vérifiées"
        if args.require_private_proofs
        else "preuves privées non vérifiées"
    )
    print(
        "Métadonnées éditoriales valides "
        f"({len(evidence_rows)} preuves, {len(asset_rows)} médias, "
        f"{len(question_rows)} questions ; {proof_status})."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
