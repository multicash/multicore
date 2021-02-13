'use strict';

var startGulp = require('multicore-build');
Object.assign(exports, startGulp('p2p', {skipBrowser: true}))
