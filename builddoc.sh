# Use of https://github.com/jsdoc2md/jsdoc-to-markdown

rm -rf docs
mkdir docs
mkdir ./tmp

jsdoc2md --files mods/*.js > ./docs/class.md

# Remove the tmp folder
rm -rf ./tmp