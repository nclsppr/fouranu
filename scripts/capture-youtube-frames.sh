#!/bin/sh
set -eu

usage() {
  echo "Usage: $0 URL DEBUT FIN NOM --authorized" >&2
  echo "Exemple: $0 'https://youtu.be/…' 01:29 01:38 koda-2-brosse --authorized" >&2
  exit 2
}

[ "$#" -eq 5 ] || usage
[ "$5" = "--authorized" ] || usage

url=$1
start=$2
end=$3
name=$4

case "$url" in
  https://www.youtube.com/*|https://youtube.com/*|https://youtu.be/*) ;;
  *) echo "URL YouTube attendue" >&2; exit 2 ;;
esac
case "$name" in
  ''|*[!a-z0-9-]*) echo "NOM accepte a-z, 0-9 et les tirets" >&2; exit 2 ;;
esac

command -v yt-dlp >/dev/null || { echo "yt-dlp absent" >&2; exit 2; }
command -v ffmpeg >/dev/null || { echo "ffmpeg absent" >&2; exit 2; }

project_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
output_dir="$project_root/research/private/youtube/$name"
mkdir -p "$output_dir"

yt-dlp \
  --ignore-config \
  --no-playlist \
  --quiet \
  --no-warnings \
  --force-overwrites \
  --download-sections "*$start-$end" \
  --force-keyframes-at-cuts \
  --format 'bv*[height<=1080]+ba/b[height<=1080]' \
  --merge-output-format mp4 \
  --output "$output_dir/source.%(ext)s" \
  "$url"

ffmpeg -hide_banner -loglevel error -y \
  -i "$output_dir/source.mp4" \
  -vf 'fps=1,scale=1600:-2' \
  -frames:v 6 \
  "$output_dir/frame-%02d.png"

ffmpeg -hide_banner -loglevel error -y \
  -i "$output_dir/source.mp4" \
  -vf 'fps=1,scale=640:-2,tile=3x2' \
  -frames:v 1 \
  "$output_dir/contact-sheet.jpg"

echo "Planche à examiner : $output_dir/contact-sheet.jpg"
