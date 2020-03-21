#!/bin/bash
POSTS=./content/post/*
for p in $POSTS
do
  echo "Processing $p file..."
  # echo "pandoc --output=$f $f -s --to markdown-simple_tables+pipe_tables-multiline_tables-grid_tables-raw_html --atx-headers"
  # take action on each file. $f store current file name
  # cat $f
  /c/Program\ Files/Pandoc/pandoc.exe --output=$p $p -s --to markdown-simple_tables+pipe_tables-multiline_tables-grid_tables-raw_html --atx-headers
done
APIS=./content/page/apis/*
for a in $APIS
# do
  # echo "Processing $a file..."
  # echo "pandoc --output=$f $f -s --to markdown-simple_tables+pipe_tables-multiline_tables-grid_tables-raw_html --atx-headers"
  # take action on each file. $f store current file name
  # cat $f
  # pandoc --output=$a $a -s --to markdown-simple_tables+pipe_tables-multiline_tables-grid_tables-raw_html --atx-headers
  # /c/Program\ Files/Pandoc/pandoc.exe --output=$p $p -s --to markdown-simple_tables+pipe_tables-multiline_tables-grid_tables-raw_html --atx-headers
# done