# Bitcore Mnemonics

BIP39 Mnemonics for multicore

[![NPM Package](https://img.shields.io/npm/v/multicore-mnemonic.svg?style=flat-square)](https://www.npmjs.org/package/multicore-mnemonic)
[![Build Status](https://img.shields.io/travis/bitpay/multicore-mnemonic.svg?branch=master&style=flat-square)](https://travis-ci.org/bitpay/multicore-mnemonic)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/multicore-mnemonic.svg?style=flat-square)](https://coveralls.io/r/bitpay/multicore-mnemonic)

**A module for [multicore](https://github.com/bitpay/multicore) that implements [Mnemonic code for generating deterministic keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).**

## Getting Started

This library is distributed in both the npm packaging systems.

```sh
npm install multicore-lib  #this to install multicore-lib since it is a peerDependecy
npm install multicore-mnemonic
```

There are many examples of how to use it on the developer guide [section for mnemonic](./docs/index.md). For example, the following code would generate a new random mnemonic code and convert it to a `HDPrivateKey`.

```javascript
var Mnemonic = require('multicore-mnemonic');
var code = new Mnemonic(Mnemonic.Words.SPANISH);
code.toString(); // natal hada sutil año sólido papel jamón combate aula flota ver esfera...
var xpriv = code.toHDPrivateKey();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/multicore/blob/master/CONTRIBUTING.md) on the main multicore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/multicore/blob/master/LICENSE).

Copyright 2013-2019 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
