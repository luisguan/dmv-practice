#!/usr/bin/env bash
# Dump the California Driver Handbook (Chinese) to text with page markers.
#
# The published PDF is AES-256 encrypted with an empty user password, which
# pdftotext opens fine. Page markers matter: every explanation in the question
# bank cites a handbook page, and those citations get checked by hand against
# this file.
#
# One pdftotext pass keeps the form feeds pdftotext emits between pages, then
# python turns each into a numbered marker. (Don't loop pdftotext per page --
# pdfinfo isn't always installed, and 92 invocations is 92x the work.)
#
# Usage: tools/extract-handbook.sh <path-to-handbook.pdf> [out.txt]
set -euo pipefail

PDF="${1:?usage: extract-handbook.sh <handbook.pdf> [out.txt]}"
OUT="${2:-tools/handbook.txt}"

pdftotext -enc UTF-8 "$PDF" - | python -c '
import sys
raw = sys.stdin.read()
pages = raw.split("\f")
if pages and not pages[-1].strip():
    pages.pop()
out = []
for n, text in enumerate(pages, 1):
    out.append("\n===== PAGE %d =====\n%s" % (n, text.strip()))
sys.stdout.write("\n".join(out))
sys.stderr.write("pages: %d\n" % len(pages))
' > "$OUT"

echo "wrote $OUT ($(wc -c < "$OUT") bytes)"
