#!/bin/bash

yarn workspace router unlink
yarn workspace ts-app unlink

./scripts/clear-node-modules.sh
./scripts/clear-dist.sh
