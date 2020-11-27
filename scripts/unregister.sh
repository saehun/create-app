#!/bin/bash

yarn workspace router unlink
yarn workspace ts-app unlink
yarn workspace js-app unlink

./scripts/clear-node-modules.sh
./scripts/clear-dist.sh
