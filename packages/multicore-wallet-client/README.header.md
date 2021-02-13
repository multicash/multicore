# multicore-wallet-client

[![NPM Package](https://img.shields.io/npm/v/multicore-wallet-client.svg?style=flat-square)](https://www.npmjs.org/package/multicore-wallet-client)
[![Build Status](https://img.shields.io/travis/bitpay/multicore-wallet-client.svg?branch=master&style=flat-square)](https://travis-ci.org/bitpay/multicore-wallet-client)
[![Coverage Status](https://coveralls.io/repos/bitpay/multicore-wallet-client/badge.svg)](https://coveralls.io/r/bitpay/multicore-wallet-client)

The *official* client library for [multicore-wallet-service](https://github.com/bitpay/multicore-wallet-service).

## Description

This package communicates with BWS [Bitcore wallet service](https://github.com/bitpay/multicore-wallet-service) using the REST API. All REST endpoints are wrapped as simple async methods. All relevant responses from BWS are checked independently by the peers, thus the importance of using this library when talking to a third party BWS instance.

See [Bitcore-wallet] (https://github.com/bitpay/multicore-wallet) for a simple CLI wallet implementation that relays on BWS and uses multicore-wallet-client.

## Get Started

You can start using bitcore-wallet-client via [NPM](https://www.npmjs.com/package/multicore-wallet-client): by running `npm install bitcore-wallet-client` from your console.

## Example

Start your own local [Bitcore wallet service](https://github.com/bitpay/multicore-wallet-service) instance. In this example we assume you have `multicore-wallet-service` running on your `localhost:3232`.

Then create two files `irene.js` and `tomas.js` with the content below:

### **irene.js**

``` javascript
var Client = require('multicore-wallet-client');


var fs = require('fs');
var BWS_INSTANCE_URL = 'https://bws.bitpay.com/bws/api'

var client = new Client({
  baseUrl: BWS_INSTANCE_URL,
  verbose: false,
});

client.createWallet("My Wallet", "Irene", 2, 2, {network: 'testnet'}, function(err, secret) {
  if (err) {
    console.log('error: ',err); 
    return
  };
  // Handle err
  console.log('Wallet Created. Share this secret with your copayers: ' + secret);
  fs.writeFileSync('irene.dat', client.export());
});
```

### **tomas.js**

``` javascript

var Client = require('multicore-wallet-client');


var fs = require('fs');
var BWS_INSTANCE_URL = 'https://bws.bitpay.com/bws/api'

var secret = process.argv[2];
if (!secret) {
  console.log('./tomas.js <Secret>')

  process.exit(0);
}

var client = new Client({
  baseUrl: BWS_INSTANCE_URL,
  verbose: false,
});

client.joinWallet(secret, "Tomas", {}, function(err, wallet) {
  if (err) {
    console.log('error: ', err);
    return
  };

  console.log('Joined ' + wallet.name + '!');
  fs.writeFileSync('tomas.dat', client.export());


  client.openWallet(function(err, ret) {
    if (err) {
      console.log('error: ', err);
      return
    };
    console.log('\n\n** Wallet Info', ret); //TODO

    console.log('\n\nCreating first address:', ret); //TODO
    if (ret.wallet.status == 'complete') {
      client.createAddress({}, function(err,addr){
        if (err) {
          console.log('error: ', err);
          return;
        };

        console.log('\nReturn:', addr)
      });
    }
  });
});
```

Install `multicore-wallet-client` before start:

```sh
npm i multicore-wallet-client
```

Create a new wallet with the first script:

```sh
$ node irene.js
info Generating new keys
 Wallet Created. Share this secret with your copayers: JbTDjtUkvWS4c3mgAtJf4zKyRGzdQzZacfx2S7gRqPLcbeAWaSDEnazFJF6mKbzBvY1ZRwZCbvT
```

Join to this wallet with generated secret:

```sh
$ node tomas.js JbTDjtUkvWS4c3mgAtJf4zKyRGzdQzZacfx2S7gRqPLcbeAWaSDEnazFJF6mKbzBvY1ZRwZCbvT
Joined My Wallet!

Wallet Info: [...]

Creating first address:

Return: [...]

```

Note that the scripts created two files named `irene.dat` and `tomas.dat`. With these files you can get status, generate addresses, create proposals, sign transactions, etc.
