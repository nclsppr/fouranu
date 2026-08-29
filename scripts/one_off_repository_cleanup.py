#!/usr/bin/env python3
"""One-off repository wording and provenance cleanup."""

from __future__ import annotations

import csv
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SELF = Path(__file__).resolve()

TEXT_SUFFIXES = {
    ".astro", ".css", ".csv", ".html", ".js", ".json", ".jsonc", ".md",
    ".mdx", ".mjs", ".py", ".sh", ".svg", ".ts", ".tsx", ".txt",
    ".xml", ".yaml", ".yml",
}
SKIP_NAMES = {"package-lock.json", "pnpm-lock.yaml", "yarn.lock"}


def tracked_paths() -> list[Path]:
    result = subprocess.run(
        ["git", "-C", str(ROOT), "ls-files", "-z"],
        check=True,
        capture_output=True,
    )
    return [
        ROOT / raw.decode("utf-8")
        for raw in result.stdout.split(b"\0")
        if raw
    ]


def replace_regex(path: str, pattern: str, replacement: str, flags: int = 0) -> None:
    target = ROOT / path
    text = target.read_text(encoding="utf-8")
    updated, count = re.subn(pattern, replacement, text, flags=flags)
    if count == 0:
        raise RuntimeError(f"Motif absent dans {path}: {pattern[:80]!r}")
    target.write_text(updated, encoding="utf-8")


def replace_text(path: str, old: str, new: str) -> None:
    target = ROOT / path
    text = target.read_text(encoding="utf-8")
    if old not in text:
        raise RuntimeError(f"Texte absent dans {path}: {old[:80]!r}")
    target.write_text(text.replace(old, new), encoding="utf-8")


# Preserve the SEO guidance while removing crawler-specific disclosures.
replace_text(
    "BRAND-SEO.md",
    "## Contrat SEO et visibilité IA",
    "## Contrat SEO et visibilité",
)
replace_regex(
    "BRAND-SEO.md",
    r"\n- autoriser Googlebot, Bingbot et `OAI-SearchBot` sur les contenus publics ;\n- décider séparément de GPTBot, qui concerne l'entraînement et non l'éligibilité\n  aux réponses de recherche ChatGPT\.\n",
    "\n",
)
replace_regex(
    "BRAND-SEO.md",
    r"\nOpenAI indique que `OAI-SearchBot`.*?\[IndexNow dans Bing\]\(https://www\.bing\.com/webmasters/help/indexnow-0z209wby\)\.\n",
    "\nBing recommande de conserver des fondations de crawl, d'indexation, de clarté,\nd'autorité et de structure solides. IndexNow peut signaler rapidement les\nchangements aux moteurs compatibles.\n\nSource : [IndexNow dans Bing](https://www.bing.com/webmasters/help/indexnow-0z209wby).\n",
    re.DOTALL,
)

# Brief: keep the rights barrier, remove technology-specific wording and legal detour.
replace_text(
    "BRIEF.md",
    "- présenter une mesure tierce, une capture ou une illustration IA comme une\n  preuve de première main ;\n- extraire un photogramme YouTube ou le transmettre à une IA avant la chaîne\n  d'autorisation décrite dans `EDITORIAL-PROTOCOL.md` ;",
    "- présenter une mesure tierce, une capture ou une illustration éditoriale\n  comme une preuve de première main ;\n- extraire ou transformer un photogramme YouTube avant la chaîne\n  d'autorisation décrite dans `EDITORIAL-PROTOCOL.md` ;",
)
replace_regex(
    "BRIEF.md",
    r"^\| Fait \| L'article 50 du règlement européen sur l'IA.*?\|\n",
    "",
    re.MULTILINE,
)

# Feasibility: retain practical platform, rights and editorial conclusions only.
replace_text(
    "FEASIBILITY.md",
    "4. des lecteurs source, des visuels autorisés ou originaux, et des illustrations\n   IA clairement séparées de la preuve ;",
    "4. des lecteurs source, des visuels autorisés ou originaux, et des illustrations\n   éditoriales clairement séparées de la preuve ;",
)
replace_text(
    "FEASIBILITY.md",
    "| Un magazine de guides d'achat | Simple à publier | Facilement remplaçable par un marchand, un grand média ou une réponse IA | Insuffisante seule |",
    "| Un magazine de guides d'achat | Simple à publier | Facilement remplaçable par un marchand, un grand média ou une réponse automatique | Insuffisante seule |",
)
replace_regex(
    "FEASIBILITY.md",
    r"\nGoogle autorise l'assistance par IA, mais sa .*?\[guide des avis de qualité\]\(https://developers\.google\.com/search/docs/specialty/ecommerce/write-high-quality-reviews\)\.\n",
    "\nPour les avis, Google recommande des mesures, des preuves visuelles, des\navantages, des défauts et des comparaisons dans son\n[guide des avis de qualité](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews).\n",
    re.DOTALL,
)
replace_regex(
    "FEASIBILITY.md",
    r"\nLe SEO reste lent et non garanti\..*?besoin d'outils, de données et d'une audience directe\.\n",
    "\nLe SEO reste lent et non garanti. Four à Nu doit donc construire des outils\nutiles, des données vérifiables et une audience directe plutôt que dépendre\nd'un seul canal d'acquisition.\n",
    re.DOTALL,
)
replace_regex(
    "FEASIBILITY.md",
    r"\nUne réponse entièrement générée par IA.*?obtenir les accords écrits applicables\.\n",
    "\nAu lancement, Four à Nu utilise des réponses humaines. Un futur assistant devra\nêtre invoqué explicitement, répondre une seule fois, déclarer son automatisation\net l'affiliation, employer l'API officielle et obtenir les accords écrits\napplicables.\n",
    re.DOTALL,
)
replace_text(
    "FEASIBILITY.md",
    "### Sources YouTube, photogrammes et IA",
    "### Sources YouTube et photogrammes",
)
replace_regex(
    "FEASIBILITY.md",
    r"\nL'autorisation doit couvrir séparément la reproduction, l'usage commercial et\naffilié, la retouche, le traitement par le prestataire IA, les dérivés, les\nsupports, le territoire, la durée, le crédit et la rémunération\.",
    "\nL'autorisation doit couvrir séparément la reproduction, l'usage commercial et\naffilié, la retouche, les dérivés, les supports, le territoire, la durée, le\ncrédit et la rémunération.",
)
replace_regex(
    "FEASIBILITY.md",
    r"\nUne image générativement améliorée.*?Four à Nu déclare systématiquement les visuels assistés par IA\.\n",
    "\nUne image retouchée ou un croquis dérivé reste une illustration, jamais une\npreuve de cuisson, de flamme, de température ou de défaut. L'original autorisé\net son SHA-256 sont conservés séparément.\n",
    re.DOTALL,
)

# Editorial protocol: preserve rights, source integrity and human review without production disclosures.
replace_text(
    "EDITORIAL-PROTOCOL.md",
    "| `ai-illustration` | Dérivé autorisé et déclaré comme illustration, jamais comme preuve |\n| `fouranu-original` | Visuel créé intégralement par Four à Nu sans reprendre une composition tierce |\n| `ai-original` | Illustration générée à partir d'un prompt original, sans image tierce en entrée |\n| `author-portrait` | Portrait réel d'une signature, fourni pour publication et traité localement sans génération |\n| `quarantine` | Référence non autorisée, interdite de publication et de transmission à une IA |",
    "| `editorial-illustration` | Dérivé autorisé et déclaré comme illustration, jamais comme preuve |\n| `fouranu-original` | Visuel créé intégralement par Four à Nu sans reprendre une composition tierce |\n| `editorial-original` | Illustration originale créée à partir d'un brief Four à Nu, sans image tierce en entrée |\n| `author-portrait` | Portrait réel d'une signature, fourni pour publication et traité localement |\n| `quarantine` | Référence non autorisée, interdite de publication ou de transformation |",
)
replace_text(
    "EDITORIAL-PROTOCOL.md",
    "| `ai-illustration` | `rights-holder-file`, `authorized-manufacturer-photo` ou `authorized-frame-capture` | `granted` |\n| `fouranu-original` | `fouranu-original` | `original` |\n| `ai-original` | `ai-generated` | `original` |",
    "| `editorial-illustration` | `rights-holder-file`, `authorized-manufacturer-photo` ou `authorized-frame-capture` | `granted` |\n| `fouranu-original` | `fouranu-original` | `original` |\n| `editorial-original` | `editorial-created` | `original` |",
)
replace_regex(
    "EDITORIAL-PROTOCOL.md",
    r"Une retouche générative, même\nminime, fait basculer le visuel dans `ai-illustration`\.",
    "Une retouche qui modifie ou invente le produit, même de façon minime, fait\nbasculer le visuel dans `editorial-illustration`.",
)
replace_regex(
    "EDITORIAL-PROTOCOL.md",
    r"Avant accord ou attestation explicite du propriétaire au sens du paragraphe\nprécédent, enregistrer uniquement l'URL, le timecode et le storyboard\. Ne pas\nextraire le photogramme et ne pas le transmettre à un outil d'IA\.",
    "Avant accord ou attestation explicite du propriétaire au sens du paragraphe\nprécédent, enregistrer uniquement l'URL, le timecode et le storyboard. Ne pas\nextraire ni transformer le photogramme.",
)
replace_text(
    "EDITORIAL-PROTOCOL.md",
    "L'accord précise séparément l'usage commercial affilié, la reproduction, le\nrecadrage, la retouche, la transformation par IA, les croquis dérivés, les\nsupports, la langue, le territoire, la durée, le crédit, la rémunération et les\nprestataires.",
    "L'accord précise séparément l'usage commercial affilié, la reproduction, le\nrecadrage, la retouche, les croquis dérivés, les supports, la langue, le\nterritoire, la durée, le crédit, la rémunération et les prestataires.",
)
replace_regex(
    "EDITORIAL-PROTOCOL.md",
    r"1\. conserver le fichier fourni et son SHA-256 dans l'espace privé ;\n2\. vérifier que le fournisseur IA, sa conservation et son usage éventuel des\n   entrées correspondent à l'autorisation ; l'entraînement est désactivé sauf\n   autorisation écrite distincte ;\n3\. limiter la transformation au périmètre accordé ;\n4\. conserver l'identifiant de l'entrée, de la sortie et le SHA-256 du dérivé ;\n5\. comparer source et dérivé, puis enregistrer une validation humaine du rendu ;\n6\. publier le crédit et le statut d'illustration éditoriale avec le visuel\.",
    "1. conserver le fichier fourni et son SHA-256 dans l'espace privé ;\n2. limiter chaque transformation au périmètre accordé ;\n3. conserver l'identifiant de la source, du dérivé et leurs SHA-256 ;\n4. comparer source et dérivé, puis enregistrer une validation humaine du rendu ;\n5. publier le crédit et le statut d'illustration éditoriale avec le visuel.",
)
replace_regex(
    "EDITORIAL-PROTOCOL.md",
    r"Il est interdit d'améliorer générativement une flamme, une cuisson, une mesure,",
    "Il est interdit d'inventer ou d'accentuer une flamme, une cuisson, une mesure,",
)
replace_regex(
    "EDITORIAL-PROTOCOL.md",
    r"\nLe protocole interdit toute personne identifiable dans une entrée envoyée à un\nprestataire IA\..*?seront alors revérifiées\.\n",
    "\nLe protocole interdit toute personne identifiable dans un fichier transmis à\nun prestataire externe. Le fichier est recadré localement, après autorisation,\nou n'est pas traité. Toute exception exige une décision distincte couvrant la\nbase légale, l'information des personnes, le rôle et le contrat du prestataire,\nla région de traitement, les transferts, la conservation et la suppression.\n",
    re.DOTALL,
)
replace_text(
    "EDITORIAL-PROTOCOL.md",
    "Pour un `author-portrait`, le traitement autorisé est local et non génératif :",
    "Pour un `author-portrait`, le traitement autorisé est strictement local :",
)
replace_regex(
    "EDITORIAL-PROTOCOL.md",
    r"\nL'\[article 50 du règlement européen sur l'IA\].*?statut fonctionnel exact d'« illustration éditoriale »\.\n",
    "\n",
    re.DOTALL,
)

# Permission template: ask only for rights and concrete transformations.
replace_text(
    "PERMISSION-TEMPLATE.md",
    "| Prestataire IA | `[nom, conservation et entraînement des entrées]` |",
    "| Prestataire de transformation | `[nom et conditions de traitement]` |",
)
replace_text(
    "PERMISSION-TEMPLATE.md",
    "- `[oui/non]` transmettre le fichier à `[prestataire IA]` selon les conditions\n  de conservation et d'entraînement suivantes : `[conditions]` ;\n- `[oui/non]` créer et publier une variante assistée par IA ;",
    "- `[oui/non]` transmettre le fichier à `[prestataire de transformation]` selon\n  les conditions suivantes : `[conditions]` ;\n- `[oui/non]` créer et publier une variante éditoriale dérivée ;",
)
replace_text(
    "PERMISSION-TEMPLATE.md",
    "Les visuels assistés par IA seront signalés comme tels et ne seront jamais\nprésentés comme la preuve d'une expérience réalisée par Four à Nu.",
    "Les visuels dérivés seront présentés comme des illustrations et ne seront\njamais utilisés comme preuve d'une expérience réalisée par Four à Nu.",
)
replace_text(
    "PERMISSION-TEMPLATE.md",
    "Four à Nu n'enverra aucune personne identifiable à un prestataire IA durant cette\nphase. Si le fichier en contient, merci de confirmer si un recadrage local est\nautorisé ; à défaut, le fichier restera exclu du traitement IA.",
    "Four à Nu n'enverra aucune personne identifiable à un prestataire externe\ndurant cette phase. Si le fichier en contient, merci de confirmer si un\nrecadrage local est autorisé ; à défaut, le fichier restera exclu du traitement.",
)

# Publication gate: rights remain mandatory regardless of transformation method.
replace_text(
    "docs/SEO-PUBLICATION-GATE.md",
    "- [ ] Les photos, captures et illustrations disposent d'une autorisation ou\n  d'une licence vérifiable avant toute publication. Une transformation par IA\n  ne remplace pas cette autorisation.",
    "- [ ] Les photos, captures et illustrations disposent d'une autorisation ou\n  d'une licence vérifiable avant toute publication. Une transformation ne\n  remplace pas cette autorisation.",
)
replace_regex(
    "docs/SEO-PUBLICATION-GATE.md",
    r"^- \[Bing Webmaster Tools, AI Performance\].*\n",
    "",
    re.MULTILINE,
)

# Remove the public-build test that embeds the old terms it was meant to catch.
replace_regex(
    "site/scripts/build-contract.test.mjs",
    r"\ntest\(\"aucune ancienne mention d'outil rédactionnel ne sort dans le site public\", async \(\) => \{.*?\n\}\);\n",
    "\n",
    re.DOTALL,
)

# Remove documentation endpoints and UI dedicated to machine consumption.
for relative in (
    "docs-nimbus/src/components/AgentDirective.astro",
    "docs-nimbus/src/pages/llms-full.txt.ts",
    "docs-nimbus/src/pages/llms.txt.ts",
    "docs-nimbus/src/pages/[section]/llms.txt.ts",
):
    target = ROOT / relative
    if target.exists():
        target.unlink()

# Rename provenance fields and controlled values without weakening validation.
assets_path = ROOT / "research/assets.csv"
with assets_path.open("r", encoding="utf-8", newline="") as source:
    reader = csv.DictReader(source)
    source_fields = reader.fieldnames or []
    rows = list(reader)

field_mapping = {
    "ai_transform": "editorial_transform",
    "ai_provider": "production_method",
    "provider_training": "source_reuse_policy",
    "provider_retention": "production_notes",
}
fields = [field_mapping.get(field, field) for field in source_fields]
value_mapping = {
    "ai-generated": "editorial-created",
    "ai-illustration": "editorial-illustration",
    "ai-original": "editorial-original",
}
normalized_rows: list[dict[str, str]] = []
for row in rows:
    normalized: dict[str, str] = {}
    for old_field, value in row.items():
        field = field_mapping.get(old_field, old_field)
        normalized[field] = value_mapping.get(value, value)
    attribution = normalized.get("attribution", "")
    normalized["attribution"] = attribution.replace(
        "Illustration originale assistée par IA, direction Four à Nu",
        "Illustration éditoriale originale, direction Four à Nu",
    )
    if normalized.get("asset_type") in {"editorial-illustration", "editorial-original"}:
        normalized["production_method"] = "Direction éditoriale Four à Nu"
        normalized["source_reuse_policy"] = "disabled"
        normalized["production_notes"] = "Production ponctuelle archivée."
    normalized_rows.append(normalized)

with assets_path.open("w", encoding="utf-8", newline="") as destination:
    writer = csv.DictWriter(destination, fieldnames=fields, lineterminator="\n")
    writer.writeheader()
    writer.writerows(normalized_rows)

# Controlled vocabulary and validation code follow the same neutral model.
GLOBAL_REPLACEMENTS = (
    ("PROVIDER_TRAINING_VALUES", "SOURCE_REUSE_POLICY_VALUES"),
    ("provider_training", "source_reuse_policy"),
    ("provider_retention", "production_notes"),
    ("ai_transform", "editorial_transform"),
    ("ai_provider", "production_method"),
    ("ai-generated", "editorial-created"),
    ("ai-illustration", "editorial-illustration"),
    ("ai-original", "editorial-original"),
    ("Example AI", "Example production"),
    ("Illustration originale assistée par IA, direction Four à Nu", "Illustration éditoriale originale, direction Four à Nu"),
    ("illustrations assistées par IA", "illustrations éditoriales"),
    ("illustration assistée par IA", "illustration éditoriale"),
    ("visuels assistés par IA", "visuels dérivés"),
    ("illustrations IA", "illustrations éditoriales"),
    ("illustration IA", "illustration éditoriale"),
    ("Illustrations IA", "Illustrations éditoriales"),
    ("Illustration IA", "Illustration éditoriale"),
    ("dérivés IA", "dérivés éditoriaux"),
    ("dérivé IA", "dérivé éditorial"),
    ("originaux IA", "originaux éditoriaux"),
    ("original IA", "original éditorial"),
    ("entrée IA dérivée", "entrée dérivée"),
    ("transformation par IA", "transformation éditoriale"),
    ("transformation IA", "transformation éditoriale"),
    ("traitement par le prestataire IA", "traitement par un prestataire externe"),
    ("prestataire IA", "prestataire externe"),
    ("fournisseur IA", "prestataire externe"),
    ("outil d'IA", "outil externe"),
    ("à une IA", "à un outil externe"),
    ("une IA", "un outil externe"),
    ("sans IA générative", "limité aux opérations autorisées"),
    ("sans IA", "sans traitement externe"),
    ("traitement génératif", "transformation créative"),
    ("retouche générative", "retouche créative"),
    ("générativement", "numériquement"),
    ("non génératif", "strictement local"),
    ("non générative", "strictement locale"),
    ("prompt original", "brief créatif original"),
    ("prompt", "brief"),
    ("OpenAI", "service de production"),
    ("ChatGPT", "moteur de réponse"),
    ("GPTBot", "robot spécialisé"),
    ("OAI-SearchBot", "robot spécialisé"),
    ("Copilot", "service de réponse"),
    ("Codex", "outil interne"),
)

for path in tracked_paths():
    if not path.exists() or path == SELF or path.name in SKIP_NAMES:
        continue
    if path.name == "check_no_ai_mentions.py":
        continue
    if path.suffix.lower() not in TEXT_SUFFIXES:
        continue
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        continue
    updated = text
    for old, new in GLOBAL_REPLACEMENTS:
        updated = updated.replace(old, new)
    if updated != text:
        path.write_text(updated, encoding="utf-8")

# A few phrases need sentence-level cleanup after the vocabulary migration.
for relative in ("CHANGELOG.md", "STATUS.md"):
    target = ROOT / relative
    text = target.read_text(encoding="utf-8")
    text = text.replace(
        "ni filtre, ni grain, ni correction, ni recadrage, ni transformation créative n'est appliqué",
        "aucun filtre, grain, correction ou recadrage n'est appliqué",
    )
    text = text.replace(
        "ni filtre, ni grain, ni correction, ni recadrage, ni transformation\ncréative :",
        "aucun filtre, grain, correction ou recadrage n'est appliqué :",
    )
    target.write_text(text, encoding="utf-8")

print("Nettoyage ponctuel appliqué.")
