#!/bin/bash
FILES=./*.md
for filename in $FILES
do
  echo "Processing $filename file..."
  echo "${filename%.*}"
  mkdir ${filename%.*}
  cp $filename ./${filename%.*}/index.md
  # take action on each file. $f store current file name
  # cat $filename
  # echo "createing ./ ${f%%.*}"
  # mkdir -p ./${f%%.*}
  # mv $f ./$f/index.md
done