#!/bin/bash
if [ -z "$1" ]; then
    echo "Usage: ./bump-version.sh <new-version>"
    echo "Current version: $(cat VERSION)"
    exit 1
fi

NEW_VERSION=$1
echo "$NEW_VERSION" > VERSION
sed -i '' "s/const VERSION = \".*\";/const VERSION = \"$NEW_VERSION\";/" theme/version.js
echo "Version bumped to $NEW_VERSION"
