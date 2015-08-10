#!/bin/bash
echo 'building & watching for changes...'
coffee -m -w -o dist -c src
