#!/bin/bash

# delete workspace packages
find packages -type d -name 'dist' -maxdepth 2 | xargs rm -r
