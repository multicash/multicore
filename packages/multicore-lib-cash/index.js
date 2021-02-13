'use strict';

var multicore = module.exports;

// module information
multicore.version = 'v' + require('./package.json').version;
multicore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of multicore-lib-cash found. ' +
      'Please make sure to require multicore-lib and check that submodules do' +
      ' not also include their own multicore-lib dependency.';
    throw new Error(message);
  }
};
multicore.versionGuard(global._multicoreCash);
global._multicoreCash = multicore.version;

// crypto
multicore.crypto = {};
multicore.crypto.BN = require('./lib/crypto/bn');
multicore.crypto.ECDSA = require('./lib/crypto/ecdsa');
multicore.crypto.Schnorr = require('./lib/crypto/schnorr');
multicore.crypto.Hash = require('./lib/crypto/hash');
multicore.crypto.Random = require('./lib/crypto/random');
multicore.crypto.Point = require('./lib/crypto/point');
multicore.crypto.Signature = require('./lib/crypto/signature');

// encoding
multicore.encoding = {};
multicore.encoding.Base58 = require('./lib/encoding/base58');
multicore.encoding.Base58Check = require('./lib/encoding/base58check');
multicore.encoding.BufferReader = require('./lib/encoding/bufferreader');
multicore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
multicore.encoding.Varint = require('./lib/encoding/varint');

// utilities
multicore.util = {};
multicore.util.buffer = require('./lib/util/buffer');
multicore.util.js = require('./lib/util/js');
multicore.util.preconditions = require('./lib/util/preconditions');
multicore.util.base32 = require('./lib/util/base32');
multicore.util.convertBits = require('./lib/util/convertBits');

// errors thrown by the library
multicore.errors = require('./lib/errors');

// main bitcoin library
multicore.Address = require('./lib/address');
multicore.Block = require('./lib/block');
multicore.MerkleBlock = require('./lib/block/merkleblock');
multicore.BlockHeader = require('./lib/block/blockheader');
multicore.HDPrivateKey = require('./lib/hdprivatekey.js');
multicore.HDPublicKey = require('./lib/hdpublickey.js');
multicore.Networks = require('./lib/networks');
multicore.Opcode = require('./lib/opcode');
multicore.PrivateKey = require('./lib/privatekey');
multicore.PublicKey = require('./lib/publickey');
multicore.Script = require('./lib/script');
multicore.Transaction = require('./lib/transaction');
multicore.URI = require('./lib/uri');
multicore.Unit = require('./lib/unit');

// dependencies, subject to change
multicore.deps = {};
multicore.deps.bnjs = require('bn.js');
multicore.deps.bs58 = require('bs58');
multicore.deps.Buffer = Buffer;
multicore.deps.elliptic = require('elliptic');
multicore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
multicore.Transaction.sighash = require('./lib/transaction/sighash');
