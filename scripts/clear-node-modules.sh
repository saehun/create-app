#!/bin/bash

# delete main root package
rm -r node_modules

# delete workspace packages
find packages -type d -name 'node_modules' -maxdepth 2 | xargs rm -r
