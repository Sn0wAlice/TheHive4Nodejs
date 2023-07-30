# Use of https://github.com/jsdoc2md/jsdoc-to-markdown

mkdir ./tmp
jsdoc2md --files mods/*.js > ./tmp/mods.md

# Read the base README
cat ./utils/README.md > ./tmp/README.md

# Replace "__DOC__" with the generated documentation
node builddoc.js

# Remove the tmp folder
rm -rf ./tmp