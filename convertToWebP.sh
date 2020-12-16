#!/bin/bash

#for FILE in ./src/post/*/*.jpg; 
#for FILE in ./src/post/2020-12-05-own-your-content-getting-started/*.jpg
#do echo $FILE; 
#yarn cwebp -q 75 
#yarn cwebp -q 75 $1 -o "${1%.jpg}.webp";
#done

#find ./ -type f -name '*.jpg' -exec sh -c 'cwebp -q 75 $1 -o "${1%.png}.webp"' _ {} \;
#find ./src/post/2020-12-05-own-your-content-getting-started/*.jpg -type f -name '*.jpg' -exec sh -c 'echo $1 "${1%}.webp"' _ {} \;
#find ./src/post/2020-12-05-own-your-content-getting-started/*.jpg -type f -name '*.jpg' -exec sh -c './bin/cwebp -q 75 $1 -o "${1%.png}.webp"' _ {} \;

for FILE in ./src/post/*/*.jpg
do 
DIRNAME="$(dirname "${FILE}")"
BASEFILE="$(basename -s .jpg $FILE)"
OUTPUTFILE=${DIRNAME}/${BASEFILE}.webp
OUTPUTFILETHUMB=${DIRNAME}/${BASEFILE}-thumbnail.webp
echo "OUTPUTFILE= $OUTPUTFILE"
echo "$BASEFILE check"
if [[ "$BASEFILE" =~ ^featured ]]; then
    echo "WINNER $FILE"
    ./bin/cwebp -q 75 $FILE -o "${OUTPUTFILE}" -resize 1024 0
    ./bin/cwebp -q 75 $FILE -o "${OUTPUTFILETHUMB}" -resize 150 0
    echo "rm $FILE"
    #rm $FILE
fi
#resizes to 1024 width and variable height
#echo "./bin/cwebp -q 75 $FILE -o \"${FILE%.png}.resized.webp\" -resize 1024"
#./bin/cwebp -q 75 $FILE -o "${FILE%.png}.resized.webp" -resize 1024 0
#./bin/cwebp -q 75 $FILE -o "${FILE%.png}.resized.webp" -resize 150 0
done