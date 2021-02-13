module.exports = {
  BTC: {
    lib: require('multicore-lib'),
    p2p: require('multicore-p2p')
  },
  BCH: {
    lib: require('multicore-lib-cash'),
    p2p: require('multicore-p2p-cash')
  },
  MCX: {
    lib: require('multicore-lib-mcx'),
    p2p: require('multicore-p2p-mcx')
  }
};
