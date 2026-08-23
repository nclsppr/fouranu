#!/usr/bin/env bash

set -Eeuo pipefail

REPOSITORY_ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)
readonly REPOSITORY_ROOT

usage() {
  echo "usage: build-vps-release <site-directory> <output-directory> <git-revision>" >&2
  exit 64
}

[[ $# -eq 3 ]] || usage

site_directory=$1
output_directory=$2
revision=$(git -C "$REPOSITORY_ROOT" rev-parse --verify "${3}^{commit}")
[[ $revision =~ ^[0-9a-f]{40}$ ]] || {
  echo "revision must resolve to a complete lowercase Git commit" >&2
  exit 1
}
[[ -d $site_directory && ! -L $site_directory ]] || {
  echo "site directory must be a real directory: $site_directory" >&2
  exit 1
}

site_directory=$(cd "$site_directory" && pwd -P)
[[ ! -L $output_directory ]] || {
  echo "output directory must not be a symbolic link: $output_directory" >&2
  exit 1
}
output_directory=$(python3 -c 'import os, sys; print(os.path.realpath(sys.argv[1]))' "$output_directory")

case "$output_directory/" in
  "$site_directory/"*)
    echo "output directory must be outside the site directory" >&2
    exit 1
    ;;
esac

mkdir -p "$output_directory"
[[ -d $output_directory && ! -L $output_directory ]] || {
  echo "output directory must be a real directory: $output_directory" >&2
  exit 1
}
output_directory=$(cd "$output_directory" && pwd -P)

if [[ -n $(find "$output_directory" -mindepth 1 -maxdepth 1 -print -quit) ]]; then
  echo "output directory must be empty: $output_directory" >&2
  exit 1
fi

FOURANU_RELEASE_ROOT=$site_directory \
FOURANU_RELEASE_REVISION=$revision \
FOURANU_RELEASE_OUTPUT=$output_directory \
python3 - <<'PY'
from __future__ import annotations

import gzip
import hashlib
import io
import json
import os
import stat
import tarfile
import tempfile
from dataclasses import dataclass
from pathlib import Path, PurePosixPath
from urllib.parse import quote


MAX_ARCHIVE_BYTES = 50 * 1024 * 1024
MAX_FILES = 2_000
MAX_MEMBERS = 4_001
MAX_UNCOMPRESSED_BYTES = 100 * 1024 * 1024
READ_SIZE = 1024 * 1024

root = Path(os.environ["FOURANU_RELEASE_ROOT"])
revision = os.environ["FOURANU_RELEASE_REVISION"]
output = Path(os.environ["FOURANU_RELEASE_OUTPUT"])
archive = output / "site.tar.gz"
inventory = output / "routes.json"


@dataclass(frozen=True)
class ReleaseFile:
    relative: str
    content: bytes

    @property
    def size(self) -> int:
        return len(self.content)

    @property
    def sha256(self) -> str:
        return hashlib.sha256(self.content).hexdigest()


def fail(message: str) -> None:
    raise SystemExit(message)


def validate_relative_path(relative: str) -> None:
    path = PurePosixPath(relative)
    if (
        not relative
        or len(relative) > 1024
        or path.is_absolute()
        or relative.startswith("/")
        or any(part in {"", ".", ".."} for part in path.parts)
        or "\\" in relative
        or any(ord(character) < 0x20 or ord(character) == 0x7F for character in relative)
    ):
        fail(f"public archive contains an unsafe path: {relative!r}")


def read_regular_file(path: Path, relative: str, remaining: int) -> bytes:
    flags = os.O_RDONLY | getattr(os, "O_CLOEXEC", 0) | getattr(os, "O_NOFOLLOW", 0)
    try:
        descriptor = os.open(path, flags)
    except OSError as error:
        fail(f"cannot open public file {relative!r} safely: {error}")
    try:
        metadata = os.fstat(descriptor)
        if not stat.S_ISREG(metadata.st_mode):
            fail(f"public archive contains a non-regular file: {relative}")
        if metadata.st_size > remaining:
            fail("public archive exceeds the 100 MiB uncompressed limit")
        chunks: list[bytes] = []
        read = 0
        while chunk := os.read(descriptor, READ_SIZE):
            read += len(chunk)
            if read > remaining:
                fail("public archive exceeds the 100 MiB uncompressed limit")
            chunks.append(chunk)
        if read != metadata.st_size:
            fail(f"public file changed while it was read: {relative}")
        return b"".join(chunks)
    finally:
        os.close(descriptor)


directories: list[str] = []
files: list[ReleaseFile] = []
total_size = 0
for path in sorted(root.rglob("*"), key=lambda candidate: candidate.relative_to(root).as_posix()):
    relative = path.relative_to(root).as_posix()
    validate_relative_path(relative)
    metadata = path.lstat()
    if stat.S_ISDIR(metadata.st_mode):
        directories.append(relative)
        continue
    if not stat.S_ISREG(metadata.st_mode):
        fail(f"public archive contains a non-regular file: {relative}")
    content = read_regular_file(path, relative, MAX_UNCOMPRESSED_BYTES - total_size)
    files.append(ReleaseFile(relative=relative, content=content))
    total_size += len(content)

if not files:
    fail("public archive is empty")
if len(files) > MAX_FILES:
    fail("public archive exceeds the 2000-file limit")
if 1 + len(directories) + len(files) > MAX_MEMBERS:
    fail("public archive exceeds the 4001-member limit")
if total_size > MAX_UNCOMPRESSED_BYTES:
    fail("public archive exceeds the 100 MiB uncompressed limit")

file_by_name = {item.relative: item for item in files}
if "index.html" not in file_by_name:
    fail("public archive must contain index.html")
if "404.html" not in file_by_name:
    fail("public archive must contain 404.html")
if file_by_name["404.html"].size == 0:
    fail("404.html must not be empty")
if not any(item.relative.endswith(".html") and item.size > 1024 for item in files):
    fail("public archive must contain an HTML file larger than 1024 bytes")


def add_directory(target: tarfile.TarFile, name: str) -> None:
    entry = tarfile.TarInfo(name)
    entry.type = tarfile.DIRTYPE
    entry.mode = 0o755
    entry.uid = entry.gid = 0
    entry.uname = entry.gname = ""
    entry.mtime = 0
    target.addfile(entry)


with tempfile.TemporaryDirectory(prefix=".fouranu-vps-release-", dir=output) as temporary:
    temporary_root = Path(temporary)
    tar_path = temporary_root / "site.tar"
    compressed_path = temporary_root / "site.tar.gz"
    inventory_path = temporary_root / "routes.json"

    with tarfile.open(tar_path, "w", format=tarfile.GNU_FORMAT) as target:
        add_directory(target, "site")
        for directory in directories:
            add_directory(target, f"site/{directory}")
        for item in files:
            entry = tarfile.TarInfo(f"site/{item.relative}")
            entry.mode = 0o644
            entry.uid = entry.gid = 0
            entry.uname = entry.gname = ""
            entry.mtime = 0
            entry.size = item.size
            target.addfile(entry, io.BytesIO(item.content))

    with compressed_path.open("wb") as raw_output:
        with gzip.GzipFile(
            filename="",
            mode="wb",
            compresslevel=9,
            fileobj=raw_output,
            mtime=0,
        ) as compressed:
            with tar_path.open("rb") as source:
                while chunk := source.read(READ_SIZE):
                    compressed.write(chunk)

    archive_size = compressed_path.stat().st_size
    if archive_size > MAX_ARCHIVE_BYTES:
        fail("public archive exceeds the 50 MiB compressed limit")

    routes: list[dict[str, object]] = []
    seen_routes: set[str] = set()
    for item in files:
        if item.relative == "index.html":
            route = "/"
        elif item.relative.endswith("/index.html"):
            route = "/" + item.relative.removesuffix("index.html")
        else:
            route = "/" + item.relative
        route = quote(route, safe="/-._~")
        if len(route) > 4096:
            fail(f"public route exceeds the 4096-character limit: {route!r}")
        if route in seen_routes:
            fail(f"duplicate public route: {route}")
        seen_routes.add(route)
        routes.append(
            {
                "bytes": item.size,
                "file": item.relative,
                "path": route,
                "sha256": item.sha256,
                "status": 200,
            }
        )

    value = {
        "contract": "vps-infra.route-inventory.v1",
        "schema": 1,
        "site": {
            "archive_bytes": archive_size,
            "archive_sha256": hashlib.sha256(compressed_path.read_bytes()).hexdigest(),
            "file_count": len(files),
            "uncompressed_bytes": total_size,
        },
        "source": {
            "repository": "nclsppr/fouranu",
            "revision": revision,
        },
        "routes": routes,
    }
    inventory_path.write_text(
        json.dumps(value, ensure_ascii=True, separators=(",", ":"), sort_keys=True) + "\n",
        encoding="ascii",
    )
    os.replace(compressed_path, archive)
    os.replace(inventory_path, inventory)

print(f"revision={revision}")
print(f"site_archive={archive}")
print(f"route_inventory={inventory}")
PY
