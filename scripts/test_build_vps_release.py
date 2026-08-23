#!/usr/bin/env python3

from __future__ import annotations

import hashlib
import json
import os
import stat
import subprocess
import tarfile
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BUILDER = ROOT / "scripts" / "build-vps-release.sh"
REVISION = subprocess.run(
    ["git", "-C", str(ROOT), "rev-parse", "HEAD"],
    check=True,
    capture_output=True,
    text=True,
).stdout.strip()


def write_valid_site(root: Path) -> None:
    (root / "article").mkdir(parents=True)
    (root / "assets").mkdir()
    (root / "index.html").write_text("<!doctype html>" + "x" * 1400, encoding="utf-8")
    (root / "404.html").write_text("<!doctype html>introuvable", encoding="utf-8")
    (root / "article/index.html").write_text("<!doctype html>article", encoding="utf-8")
    (root / "assets/app.css").write_text("body{color:#111}", encoding="utf-8")


class BuildVpsReleaseTests(unittest.TestCase):
    def run_builder(
        self,
        site: Path,
        output: Path,
        *,
        expect_success: bool = True,
    ) -> subprocess.CompletedProcess[str]:
        result = subprocess.run(
            ["bash", str(BUILDER), str(site), str(output), REVISION],
            check=False,
            capture_output=True,
            text=True,
        )
        if expect_success:
            self.assertEqual(result.returncode, 0, result.stderr)
        else:
            self.assertNotEqual(result.returncode, 0, result.stdout)
        return result

    def test_release_is_deterministic_and_matches_inventory_v1(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            site = root / "site"
            site.mkdir()
            write_valid_site(site)
            first = root / "first"
            second = root / "second"
            self.run_builder(site, first)
            self.run_builder(site, second)

            first_archive = (first / "site.tar.gz").read_bytes()
            self.assertEqual(first_archive, (second / "site.tar.gz").read_bytes())
            self.assertEqual(
                (first / "routes.json").read_bytes(),
                (second / "routes.json").read_bytes(),
            )
            self.assertEqual(first_archive[4:8], b"\0\0\0\0")

            inventory = json.loads((first / "routes.json").read_text(encoding="ascii"))
            self.assertEqual(inventory["contract"], "vps-infra.route-inventory.v1")
            self.assertEqual(inventory["schema"], 1)
            self.assertEqual(inventory["source"], {"repository": "nclsppr/fouranu", "revision": REVISION})
            self.assertEqual(inventory["site"]["file_count"], 4)
            self.assertEqual(
                inventory["site"]["archive_sha256"],
                hashlib.sha256(first_archive).hexdigest(),
            )
            self.assertEqual(
                {route["path"] for route in inventory["routes"]},
                {"/", "/404.html", "/article/", "/assets/app.css"},
            )
            self.assertTrue(all(route["status"] == 200 for route in inventory["routes"]))

            with tarfile.open(first / "site.tar.gz", "r:gz") as archive:
                members = archive.getmembers()
                self.assertEqual(members[0].name, "site")
                self.assertEqual({member.uid for member in members}, {0})
                self.assertEqual({member.gid for member in members}, {0})
                self.assertEqual({member.mtime for member in members}, {0})
                self.assertTrue(all(not member.pax_headers for member in members))
                for member in members:
                    expected_mode = 0o755 if member.isdir() else 0o644
                    self.assertEqual(stat.S_IMODE(member.mode), expected_mode)

    def test_release_rejects_missing_404(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            site = root / "site"
            site.mkdir()
            write_valid_site(site)
            (site / "404.html").unlink()
            result = self.run_builder(site, root / "output", expect_success=False)
            self.assertIn("must contain 404.html", result.stderr)

    def test_release_rejects_symbolic_links(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            site = root / "site"
            site.mkdir()
            write_valid_site(site)
            (site / "linked.css").symlink_to(site / "assets/app.css")
            result = self.run_builder(site, root / "output", expect_success=False)
            self.assertIn("non-regular file", result.stderr)

    @unittest.skipUnless(hasattr(os, "mkfifo"), "FIFO files are unavailable")
    def test_release_rejects_special_files(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            site = root / "site"
            site.mkdir()
            write_valid_site(site)
            os.mkfifo(site / "stream")
            result = self.run_builder(site, root / "output", expect_success=False)
            self.assertIn("non-regular file", result.stderr)

    def test_release_rejects_nonempty_or_nested_output(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            site = root / "site"
            site.mkdir()
            write_valid_site(site)
            output = root / "output"
            output.mkdir()
            (output / "stale").write_text("stale", encoding="utf-8")
            nonempty = self.run_builder(site, output, expect_success=False)
            self.assertIn("must be empty", nonempty.stderr)

            nested = self.run_builder(site, site / "release", expect_success=False)
            self.assertIn("must be outside", nested.stderr)


if __name__ == "__main__":
    unittest.main()
