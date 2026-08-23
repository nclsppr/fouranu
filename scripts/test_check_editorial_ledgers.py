#!/usr/bin/env python3
"""Regression tests for the editorial ledger gate."""

from __future__ import annotations

import unittest
from datetime import date, timedelta

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

    def test_j_test_is_locked_during_season_zero(self) -> None:
        row = self.external_evidence()
        row.update(
            {
                "source_type": "jupiter",
                "source_url": "",
                "evidence_class": "J-TEST",
                "published_on": "",
                "sponsorship": "",
            }
        )
        errors: list[str] = []
        ledger.check_evidence([row], errors)
        self.assertTrue(any("J-TEST reste verrouillé" in item for item in errors))

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
                "source_type": "jupiter",
                "checked_on": date.today().isoformat(),
                "evidence_class": "J-SYN",
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
                "source_type": "jupiter",
                "checked_on": date.today().isoformat(),
                "evidence_class": "J-SYN",
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
        self.assertIn("fichier fourni par l'ayant droit", joined)
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

    def test_strict_mode_requires_private_permission_file(self) -> None:
        row = self.embed_asset()
        row.update(
            {
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
                "raw_sha256": "a" * 64,
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
