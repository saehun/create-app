#!/bin/bash

yarn install --frozen-lockfile

scripts/build-shared-modules.sh

yarn workspace router build
yarn workspace router link

yarn workspace ts-app build
yarn workspace ts-app link

yarn workspace ts-mono build
yarn workspace ts-mono link

yarn workspace js-app build
yarn workspace js-app link

