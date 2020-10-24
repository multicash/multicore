#!/bin/bash

cd packages/bitcore-wallet-service && npm start
tail -F logs/bws.log # follow bws logs
