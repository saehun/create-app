#!/bin/bash

scripts/build-shared-modules.sh
yarn workspace router build
yarn workspace ts-app build
yarn workspace ts-mono build
yarn workspace js-app build
