'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on multicore-p2p Module {0}'
};

module.exports = require('multicore-lib-cash').errors.extend(spec);
