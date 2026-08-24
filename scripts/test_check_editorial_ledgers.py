#!/usr/bin/env python3
"""Regression tests for the editorial ledger gate."""

from __future__ import annotations

import hashlib
import tempfile
import unittest
from datetime import date, timedelta
from pathlib import Path
from unittest.mock import patch

import check_editorial_ledgers as ledger


class EditorialLedgerTests(unittest.TestCase):
    def buyer_question(self, identifier: str = "Q-0001") -> dict[str, str]:
        row = {field: "" for field in ledger.QUESTION_FIELDS}
        row.update(
            {
                "question_id": identifier,
                "source_type": "forum",
                "source_url": "https://example.test/thread",
                "published_on": "2026-08-01",
                "checked_on": date.today().isoformat(),
                "question": "Quel four Ooni convient à un petit balcon ?",
                "categories": "space;indoor-outdoor",
                "product_scope": "Ooni range",
                "purchase_stage": "discover",
                "article_ids": "OONI-001",
            }
        )
        return row

    def external_evidence(self, identifier: str = "EV-0001") -> dict[str, str]:
        row = {field: "" for field in ledger.EVIDENCE_FIELDS}
        row.update(
            {
                "evidence_id": identifier,
                "product_version": "Example v1",
                "source_type": "youtube",
                "source_title": "Example test",
                "publisher": "Example Creator",
                "source_url": "https://www.youtube.com/watch?v=example",
                "published_on": "2026-08-01",
                "checked_on": date.today().isoformat(),
                "timecode_start": "01:23",
                "timecode_end": "01:35",
                "evidence_class": "T-OBS",
                "observation": "Observation paraphrasée.",
                "sponsorship": "none-disclosed",
                "confidence": "medium",
            }
        )
        return row

    def embed_asset(self) -> dict[str, str]:
        row = {field: "" for field in ledger.ASSET_FIELDS}
        row.update(
            {
                "asset_id": "AS-0001",
                "evidence_ids": "EV-0001",
                "source_url": "https://www.youtube.com/watch?v=example",
                "timecode": "01:23",
                "acquisition_mode": "youtube-embed",
                "asset_type": "embed",
                "rights_status": "service-permitted",
                "commercial_use": "not-applicable",
                "ai_transform": "not-applicable",
                "publication_url": "https://example.test/article",
                "checked_on": date.today().isoformat(),
            }
        )
        return row

    def granted_frame_asset(
        self,
        acquisition_mode: str = "rights-holder-file",
    ) -> dict[str, str]:
        row = self.embed_asset()
        row.update(
            {
                "asset_type": "licensed-frame",
                "acquisition_mode": acquisition_mode,
                "rights_status": "granted",
                "commercial_use": "yes",
                "ai_transform": "no",
                "rights_holder_label": "Example Studio",
                "web_scope": "https://example.test",
                "territory": "world",
                "valid_from": date.today().isoformat(),
                "valid_until": "",
                "attribution": "Example Studio",
                "identifiable_people": "no",
                "people_clearance": "not-applicable",
                "third_party_elements": "none-identified",
                "raw_sha256": "a" * 64,
                "publication_url": "https://example.test/article",
                "permission_proof": "",
                "permission_proof_sha256": "",
            }
        )
        if acquisition_mode == "authorized-frame-capture":
            row.update(
                {
                    "permission_proof": "research/private/permissions/AS-0001.txt",
                    "permission_proof_sha256": "c" * 64,
                }
            )
        return row

    def derived_ai_asset(
        self,
        acquisition_mode: str = "rights-holder-file",
    ) -> dict[str, str]:
        row = self.granted_frame_asset(acquisition_mode)
        row.update(
            {
                "asset_type": "ai-illustration",
                "acquisition_mode": acquisition_mode,
                "ai_transform": "yes",
                "ai_provider": "Example AI",
                "provider_training": "disabled",
                "provider_retention": "zero days",
                "derived_sha256": "b" * 64,
                "human_validation": "approved",
            }
        )
        return row

    def original_ai_asset(self) -> dict[str, str]:
        row = {field: "" for field in ledger.ASSET_FIELDS}
        row.update(
            {
                "asset_id": "AS-0001",
                "acquisition_mode": "ai-generated",
                "asset_type": "ai-original",
                "rights_status": "original",
                "commercial_use": "yes",
                "ai_transform": "not-applicable",
                "ai_provider": "Example AI",
                "provider_training": "disabled",
                "provider_retention": "zero days",
                "derived_sha256": "b" * 64,
                "human_validation": "approved",
                "publication_url": "https://example.test/article",
                "checked_on": date.today().isoformat(),
            }
        )
        return row

    def test_valid_external_evidence_and_embed(self) -> None:
        errors: list[str] = []
        identifiers = ledger.check_evidence([self.external_evidence()], errors)
        ledger.check_assets([self.embed_asset()], identifiers, errors)
        self.assertEqual([], errors)

    def test_valid_buyer_question(self) -> None:
        errors: list[str] = []
        identifiers = ledger.check_questions([self.buyer_question()], errors)
        self.assertEqual({"Q-0001"}, identifiers)
        self.assertEqual([], errors)

    def test_buyer_question_rejects_duplicates_and_unknown_values(self) -> None:
        first = self.buyer_question()
        second = self.buyer_question("Q-0002")
        second.update(
            {
                "source_url": "https://",
                "question": first["question"].upper(),
                "categories": "space;unknown",
                "product_scope": "",
                "purchase_stage": "buy-now",
                "published_on": "",
                "article_ids": "bad-id",
            }
        )
        errors: list[str] = []
        ledger.check_questions([first, second], errors)
        joined = "\n".join(errors)
        self.assertIn("source_url doit être une URL HTTPS", joined)
        self.assertIn("question paraphrasée dupliquée", joined)
        self.assertIn("catégorie inconnue : unknown", joined)
        self.assertIn("product_scope est requis", joined)
        self.assertIn("purchase_stage doit valoir", joined)
        self.assertIn("published_on est requis", joined)
        self.assertIn("article_id invalide : bad-id", joined)

    def test_removed_j_test_class_is_unknown(self) -> None:
        row = self.external_evidence()
        row.update(
            {
                "source_type": "fouranu",
                "source_url": "",
                "evidence_class": "J-TEST",
                "published_on": "",
                "sponsorship": "",
            }
        )
        errors: list[str] = []
        ledger.check_evidence([row], errors)
        joined = "\n".join(errors)
        self.assertIn("evidence_class inconnue", joined)
        self.assertNotIn("verrouillé", joined)

    def test_legacy_jupiter_source_and_classes_are_unknown(self) -> None:
        for evidence_class in ("J-SYN", "J-INF"):
            with self.subTest(evidence_class=evidence_class):
                row = self.external_evidence()
                row.update(
                    {
                        "source_type": "jupiter",
                        "evidence_class": evidence_class,
                    }
                )
                errors: list[str] = []
                ledger.check_evidence([row], errors)
                joined = "\n".join(errors)
                self.assertIn("source_type inconnu", joined)
                self.assertIn("evidence_class inconnue", joined)

    def test_third_party_measurement_requires_metadata_and_conditions(self) -> None:
        row = self.external_evidence()
        row.update(
            {
                "product_version": "",
                "source_title": "",
                "publisher": "",
                "published_on": "",
                "conditions": "",
                "sponsorship": "",
                "evidence_class": "T-MES",
            }
        )
        errors: list[str] = []
        ledger.check_evidence([row], errors)
        joined = "\n".join(errors)
        for expected in (
            "product_version est requis",
            "source_title est requis",
            "publisher est requis",
            "published_on est requis",
            "sponsorship est requis",
            "mesure tierce exige ses conditions",
        ):
            self.assertIn(expected, joined)

    def test_synthesis_cannot_self_corrobate_or_use_one_source(self) -> None:
        source = self.external_evidence()
        synthesis = {field: "" for field in ledger.EVIDENCE_FIELDS}
        synthesis.update(
            {
                "evidence_id": "EV-0002",
                "source_type": "fouranu",
                "checked_on": date.today().isoformat(),
                "evidence_class": "FAN-SYN",
                "observation": "Synthèse.",
                "corroborating_ids": "EV-0002",
                "confidence": "low",
            }
        )
        errors: list[str] = []
        ledger.check_evidence([source, synthesis], errors)
        joined = "\n".join(errors)
        self.assertIn("ne peut pas se corroborer elle-même", joined)
        self.assertIn("au moins deux preuves liées", joined)
        self.assertIn("deux sources tierces distinctes", joined)

    def test_synthesis_requires_independent_sources(self) -> None:
        source_one = self.external_evidence("EV-0001")
        source_two = self.external_evidence("EV-0002")
        source_two["source_url"] = "https://www.youtube.com/watch?v=second"
        synthesis = {field: "" for field in ledger.EVIDENCE_FIELDS}
        synthesis.update(
            {
                "evidence_id": "EV-0003",
                "source_type": "fouranu",
                "checked_on": date.today().isoformat(),
                "evidence_class": "FAN-SYN",
                "observation": "Synthèse.",
                "corroborating_ids": "EV-0001;EV-0002",
                "confidence": "medium",
            }
        )
        errors: list[str] = []
        ledger.check_evidence([source_one, source_two, synthesis], errors)
        self.assertTrue(any("deux sources tierces distinctes" in item for item in errors))

        source_two["publisher"] = "Second Creator"
        errors = []
        ledger.check_evidence([source_one, source_two, synthesis], errors)
        self.assertEqual([], errors)

    def test_timecode_end_cannot_precede_start(self) -> None:
        row = self.external_evidence()
        row.update({"timecode_start": "02:00", "timecode_end": "01:59"})
        errors: list[str] = []
        ledger.check_evidence([row], errors)
        self.assertTrue(any("timecode_end précède" in item for item in errors))

    def test_fouranu_inference_uses_the_renamed_contract(self) -> None:
        source = self.external_evidence()
        inference = {field: "" for field in ledger.EVIDENCE_FIELDS}
        inference.update(
            {
                "evidence_id": "EV-0002",
                "source_type": "fouranu",
                "checked_on": date.today().isoformat(),
                "evidence_class": "FAN-INF",
                "observation": "Inférence éditoriale.",
                "corroborating_ids": "EV-0001",
                "confidence": "medium",
            }
        )
        errors: list[str] = []
        ledger.check_evidence([source, inference], errors)
        self.assertEqual([], errors)

    def test_ai_illustration_accepts_both_authorized_acquisition_modes(self) -> None:
        for acquisition_mode in (
            "rights-holder-file",
            "authorized-frame-capture",
        ):
            with self.subTest(acquisition_mode=acquisition_mode):
                errors: list[str] = []
                ledger.check_assets(
                    [self.derived_ai_asset(acquisition_mode)],
                    {"EV-0001"},
                    errors,
                )
                self.assertEqual([], errors)

    def test_licensed_frame_accepts_both_authorized_acquisition_modes(self) -> None:
        for acquisition_mode in (
            "rights-holder-file",
            "authorized-frame-capture",
        ):
            with self.subTest(acquisition_mode=acquisition_mode):
                errors: list[str] = []
                ledger.check_assets(
                    [self.granted_frame_asset(acquisition_mode)],
                    {"EV-0001"},
                    errors,
                )
                self.assertEqual([], errors)

    def test_authorized_frame_capture_requires_private_attestation(self) -> None:
        row = self.granted_frame_asset("authorized-frame-capture")
        row.update({"permission_proof": "", "permission_proof_sha256": ""})
        errors: list[str] = []
        ledger.check_assets([row], {"EV-0001"}, errors)
        self.assertTrue(
            any("exige une attestation privée" in item for item in errors)
        )

    def test_ai_original_is_valid_without_raw_file_or_third_party_right(self) -> None:
        row = self.original_ai_asset()
        errors: list[str] = []
        ledger.check_assets([row], set(), errors)
        self.assertEqual("", row["raw_sha256"])
        self.assertEqual("original", row["rights_status"])
        self.assertEqual([], errors)

    def test_incomplete_ai_original_is_rejected(self) -> None:
        row = self.original_ai_asset()
        row.update(
            {
                "acquisition_mode": "not-acquired",
                "rights_status": "granted",
                "ai_provider": "",
                "provider_training": "",
                "provider_retention": "",
                "raw_sha256": "a" * 64,
                "derived_sha256": "",
                "human_validation": "pending",
            }
        )
        errors: list[str] = []
        ledger.check_assets([row], set(), errors)
        joined = "\n".join(errors)
        self.assertIn("acquisition_mode ai-generated", joined)
        self.assertIn("rights_status original", joined)
        self.assertIn("ai_provider requis", joined)
        self.assertIn("provider_training requis", joined)
        self.assertIn("provider_retention requis", joined)
        self.assertIn("ne doit pas déclarer raw_sha256", joined)
        self.assertIn("derived_sha256 requis", joined)
        self.assertIn("human_validation approved", joined)

    def test_incomplete_public_ai_asset_is_rejected(self) -> None:
        row = self.embed_asset()
        row.update(
            {
                "asset_type": "ai-illustration",
                "acquisition_mode": "not-acquired",
                "rights_status": "granted",
                "commercial_use": "yes",
                "ai_transform": "yes",
                "rights_holder_label": "Example Studio",
                "web_scope": "no",
                "territory": "world",
                "valid_from": (date.today() + timedelta(days=1)).isoformat(),
                "valid_until": (date.today() + timedelta(days=365)).isoformat(),
                "attribution": "Example Studio",
                "identifiable_people": "unknown",
                "people_clearance": "unknown",
                "third_party_elements": "unknown",
                "ai_provider": "Example AI",
                "provider_training": "disabled",
                "provider_retention": "zero days",
                "raw_sha256": "a" * 64,
                "derived_sha256": "b" * 64,
                "human_validation": "pending",
                "permission_proof": "research/private/permissions/AS-0001.txt",
                "permission_proof_sha256": "c" * 64,
            }
        )
        errors: list[str] = []
        ledger.check_assets([row], {"EV-0001"}, errors)
        joined = "\n".join(errors)
        self.assertIn("n'est pas encore actif", joined)
        self.assertIn("web_scope doit contenir des origines HTTPS", joined)
        self.assertIn("publication_url n'est pas autorisée", joined)
        self.assertIn(
            "rights-holder-file ou authorized-frame-capture",
            joined,
        )
        self.assertIn("présence de personnes doit être résolue", joined)
        self.assertIn("interdit les personnes identifiables", joined)
        self.assertIn("human_validation approved", joined)

    def test_incomplete_public_licensed_frame_is_rejected(self) -> None:
        row = self.embed_asset()
        row.update(
            {
                "evidence_ids": "",
                "source_url": "",
                "timecode": "",
                "asset_type": "licensed-frame",
                "acquisition_mode": "rights-holder-file",
                "rights_status": "granted",
                "commercial_use": "yes",
                "ai_transform": "no",
                "rights_holder_label": "Example Studio",
                "web_scope": "https://example.test",
                "territory": "world",
                "valid_from": date.today().isoformat(),
                "valid_until": (date.today() + timedelta(days=365)).isoformat(),
                "attribution": "Example Studio",
                "identifiable_people": "no",
                "people_clearance": "not-applicable",
                "third_party_elements": "none-identified",
                "permission_proof": "research/private/permissions/AS-0001.txt",
                "permission_proof_sha256": "c" * 64,
            }
        )
        errors: list[str] = []
        ledger.check_assets([row], {"EV-0001"}, errors)
        joined = "\n".join(errors)
        self.assertIn("média tiers exige au moins un evidence_id", joined)
        self.assertIn("source_url requis", joined)
        self.assertIn("timecode requis", joined)
        self.assertIn("raw_sha256 requis", joined)

    def test_malformed_urls_and_manufacturer_measurement_are_rejected(self) -> None:
        row = self.external_evidence()
        row.update(
            {
                "source_type": "manufacturer",
                "source_url": "https://",
                "evidence_class": "T-MES",
                "conditions": "Declared protocol",
            }
        )
        errors: list[str] = []
        ledger.check_evidence([row], errors)
        joined = "\n".join(errors)
        self.assertIn("source_url doit être une URL HTTPS", joined)
        self.assertIn("source fabricant exige evidence_class FAB", joined)

    def test_granted_right_allows_no_expiry_or_permission_proof(self) -> None:
        row = self.granted_frame_asset()
        errors: list[str] = []
        ledger.check_assets(
            [row],
            {"EV-0001"},
            errors,
            require_private_proofs=True,
        )
        self.assertEqual("", row["valid_until"])
        self.assertEqual("", row["permission_proof"])
        self.assertEqual([], errors)

    def test_public_article_media_requires_an_exact_ledger_url(self) -> None:
        with tempfile.TemporaryDirectory() as temporary:
            media_root = Path(temporary)
            (media_root / "oven.webp").write_bytes(b"image")
            errors: list[str] = []

            ledger.check_public_article_media([], errors, media_root=media_root)

            self.assertEqual(
                [
                    "site/public/images/articles/oven.webp : média d'article public absent de research/assets.csv"
                ],
                errors,
            )

    def test_registered_article_media_must_exist_in_public_tree(self) -> None:
        row = self.granted_frame_asset()
        row["publication_url"] = "https://fouranu.com/images/articles/oven.webp"
        with tempfile.TemporaryDirectory() as temporary:
            errors: list[str] = []

            ledger.check_public_article_media([row], errors, media_root=Path(temporary))

            self.assertEqual(
                [
                    "research/assets.csv : média d'article enregistré mais fichier public absent : /images/articles/oven.webp"
                ],
                errors,
            )

    def test_declared_permission_proof_requires_a_sha_and_private_path(self) -> None:
        row = self.granted_frame_asset()
        row["permission_proof"] = "proof.txt"
        errors: list[str] = []
        ledger.check_assets([row], {"EV-0001"}, errors)
        joined = "\n".join(errors)
        self.assertIn("permission_proof_sha256 requis", joined)
        self.assertIn("doit rester sous research/private/permissions/", joined)

    def test_permission_proof_sha_requires_a_path(self) -> None:
        row = self.granted_frame_asset()
        row["permission_proof_sha256"] = "c" * 64
        errors: list[str] = []
        ledger.check_assets([row], {"EV-0001"}, errors)
        self.assertTrue(
            any("permission_proof requis" in item for item in errors)
        )

    def test_strict_mode_verifies_a_declared_permission_proof(self) -> None:
        payload = b"permission fixture"
        with tempfile.TemporaryDirectory() as temporary_root:
            root = Path(temporary_root)
            proof_path = root / "research/private/permissions/AS-0001.txt"
            proof_path.parent.mkdir(parents=True)
            proof_path.write_bytes(payload)

            row = self.granted_frame_asset()
            row.update(
                {
                    "permission_proof": "research/private/permissions/AS-0001.txt",
                    "permission_proof_sha256": hashlib.sha256(payload).hexdigest(),
                }
            )
            errors: list[str] = []
            with patch.object(ledger, "ROOT", root):
                ledger.check_assets(
                    [row],
                    {"EV-0001"},
                    errors,
                    require_private_proofs=True,
                )
            self.assertEqual([], errors)

            row["permission_proof_sha256"] = "c" * 64
            errors = []
            with patch.object(ledger, "ROOT", root):
                ledger.check_assets(
                    [row],
                    {"EV-0001"},
                    errors,
                    require_private_proofs=True,
                )
            self.assertTrue(
                any("SHA-256 de la preuve privée différent" in item for item in errors)
            )

    def test_strict_mode_requires_private_permission_file(self) -> None:
        row = self.granted_frame_asset()
        row.update(
            {
                "permission_proof": "research/private/permissions/does-not-exist.txt",
                "permission_proof_sha256": "c" * 64,
            }
        )
        errors: list[str] = []
        ledger.check_assets(
            [row],
            {"EV-0001"},
            errors,
            require_private_proofs=True,
        )
        self.assertTrue(any("preuve privée absente" in item for item in errors))


if __name__ == "__main__":
    unittest.main()
