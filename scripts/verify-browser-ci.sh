#!/usr/bin/env bash
set -euo pipefail

playwright_version=1.61.1
browser_image="mcr.microsoft.com/playwright:v${playwright_version}-noble@sha256:5b8f294aff9041b7191c34a4bab3ac270157a28774d4b0660e9743297b697e48"
browser_package="${RUNNER_TEMP:?}/fouranu-browser"
browser_output="${FOURANU_BROWSER_OUTPUT:?}"

mkdir -p "$browser_package" "$browser_output"
npm install --prefix "$browser_package" --no-save --package-lock=false \
  --ignore-scripts --no-audit --no-fund "playwright@$playwright_version"

# The pinned image already contains Chromium and its OS dependencies.
# Host networking lets the same runner reach the Compose service on loopback.
docker run --rm --init --ipc=host --network host \
  --user "$(id -u):$(id -g)" --workdir /workspace \
  --mount "type=bind,source=${GITHUB_WORKSPACE:?},target=/workspace,readonly" \
  --mount "type=bind,source=$browser_package,target=/browser,readonly" \
  --mount "type=bind,source=$browser_output,target=/results" \
  --env HOME=/tmp \
  --env FOURANU_PLAYWRIGHT_PACKAGE=/browser/package.json \
  --env FOURANU_BROWSER_OUTPUT=/results \
  --env FOURANU_BROWSER_BASE_URL --env FOURANU_BROWSER_EXPECTED_RELEASE_SHA \
  "$browser_image" node site/scripts/browser-smoke.mjs
