#!/usr/bin/env bash
set -euo pipefail

strings=(
  "activity-diagram-beta"
  "archimate-diagram"
  "ascii-math"
  "chart-diagram"
  "class-diagram"
  "color"
  "commons"
  "component-diagram"
  "creole"
  "deployment-diagram"
  "ebnf"
  "er-diagram"
  "files-diagram"
  "gantt-diagram"
  "ie-diagram"
  "json"
  "link"
  "mindmap-diagram"
  "nwdiag"
  "object-diagram"
  "openiconic"
  "preprocessing"
  "regex"
  "salt"
  "sequence-diagram"
  "skinparam"
  "sprite"
  "state-diagram"
  "style"
  "sub-diagram"
  "theme"
  "timing-diagram"
  "use-case-diagram"
  "wbs-diagram"
  "yaml"
)

base_url="http://alphadoc.plantuml.com/raw/markdown/en"
output_dir="./src/resources"

mkdir -p "$output_dir"

for str in "${strings[@]}"; do
  url="${base_url}/${str}"
  output_file="${output_dir}/plantuml-${str}-docs.md"

  echo "Fetching ${url} -> ${output_file}"

  curl -fsSL "$url" \
    | sed \
      -e 's|<plantuml>|```plantuml|g' \
      -e 's|</plantuml>|```|g' \
    > "$output_file"

done

echo "Done."