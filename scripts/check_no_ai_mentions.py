#!/usr/bin/env python3
"""Reject explicit references to AI-assisted production in tracked project text."""

from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
SELF = Path(__file__).resolve()

TEXT_SUFFIXES = {
    ".astro",
    ".css",
    ".csv",
    ".html",
    ".js",
    ".json",
    ".jsonc",
    ".md",
    ".mdx",
    ".mjs",
    ".py",
    ".sh",
    ".svg",
    ".ts",
    ".tsx",
    ".txt",
    ".xml",
    ".yaml",
    ".yml",
}

EXCLUDED_NAMES = {
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
}

PATTERNS = (
    ("sigle IA", re.compile(r"(?<![\w])IA(?![\w])")),
    ("sigle AI", re.compile(r"(?<![\w])AI(?![\w])")),
    ("intelligence artificielle", re.compile(r"intelligence\s+artificielle", re.IGNORECASE)),
    ("artificial intelligence", re.compile(r"artificial\s+intelligence", re.IGNORECASE)),
    ("modèle de langage", re.compile(r"mod[eè]le(?:s)?\s+de\s+langage", re.IGNORECASE)),
    ("large language model", re.compile(r"large\s+language\s+models?", re.IGNORECASE)),
    ("LLM", re.compile(r"(?<![\w])LLMs?(?![\w])")),
    ("traitement génératif", re.compile(r"(?:traitement|contenu|outil|processus)\w*\s+g[eé]n[eé]rati(?:f|ve|fs|ves)", re.IGNORECASE)),
    ("production assistée", re.compile(r"(?:assist[eé]e?s?|g[eé]n[eé]r[eé]e?s?|r[eé]dig[eé]e?s?|cr[eé][eé]e?s?)\s+(?:par|avec)\s+(?:une?\s+|l['’]\s*)?(?:IA|AI|intelligence\s+artificielle)", re.IGNORECASE)),
    ("outil nommé", re.compile(r"\b(?:OpenAI|ChatGPT|Claude|Gemini|Midjourney|DALL(?:-|·)?E|Stable\s+Diffusion|GitHub\s+Copilot|Anthropic)\b", re.IGNORECASE)),
    ("prompt", re.compile(r"(?<![\w])prompts?(?![\w])", re.IGNORECASE)),
)


def tracked_files() -> list[Path]:
    result = subprocess.run(
        ["git", "-C", str(PROJECT_ROOT), "ls-files", "-z"],
        check=True,
        capture_output=True,
    )
    paths: list[Path] = []
    for raw_path in result.stdout.split(b"\0"):
        if not raw_path:
            continue
        path = PROJECT_ROOT / raw_path.decode("utf-8")
        if path.resolve() == SELF:
            continue
        if path.name in EXCLUDED_NAMES or path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        paths.append(path)
    return paths


def main() -> int:
    findings: list[str] = []
    for path in tracked_files():
        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        relative = path.relative_to(PROJECT_ROOT)
        for line_number, line in enumerate(text.splitlines(), start=1):
            labels = [label for label, pattern in PATTERNS if pattern.search(line)]
            if labels:
                excerpt = line.strip()
                if len(excerpt) > 220:
                    excerpt = f"{excerpt[:217]}..."
                findings.append(
                    f"{relative}:{line_number}: {', '.join(labels)} | {excerpt}"
                )

    if findings:
        print("Références explicites à l’usage de l’IA détectées :", file=sys.stderr)
        for finding in findings:
            print(f"- {finding}", file=sys.stderr)
        return 1

    print("Aucune référence explicite à l’usage de l’IA dans les fichiers texte suivis.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
