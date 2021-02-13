'use strict';

var startGulp = require('multicore-build');
module.exports = startGulp('p2p', {skipBrowser: true})
