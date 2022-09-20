#!/bin/bash

# Build app
npm run build

# Clean node_modules branch cache
rm -rf node_modules/.cache/gh-pages

# Deploy to gh-pages
currentdate=`date +"%d/%m"`
NODE_DEBUG=gh-pages node_modules/.bin/gh-pages --dist build --message "New release: $currentdate"