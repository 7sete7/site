#!/bin/bash

# Build app
npm run build

# Clean node_modules branch cache
rm -rf node_modules/.cache/gh-pages

# Transform absolute paths to relative for it to work on gh-pages
# ex: <srcipt src="/index.js"> ===> <srcipt src="index.js">
sed -i -E 's/([src|href]+=")\//\1/g' dist/index.html

# Deploy to gh-pages
currentdate=`date +"%d/%m"`
NODE_DEBUG=gh-pages node_modules/.bin/gh-pages --dist dist --message "New release: $currentdate"