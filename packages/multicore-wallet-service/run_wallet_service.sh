#!/bin/bash

cd packages/multicore-wallet-service && npm start
tail -F logs/bws.log # follow bws logs
