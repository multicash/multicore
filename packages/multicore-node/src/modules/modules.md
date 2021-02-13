# Modules
Modules are loaded before services are started. This allows code to hook into services and register classes, event handlers, etc that alter the behaviors of services.

## Example - Syncing BCH
Let's say we have a node_module, named `multicore-node-bch` with the following code

```
// index.js

module.exports = class BitcoinCashModule {
  constructor(services) {
    services.Libs.register('BCH', 'multicore-lib-cash', 'multicore-p2p-cash');
    services.P2P.register('BCH', services.P2P.get('BTC'));
  }
}
```

The module has the following dependencies
```
// package.json

  "dependencies": {
    "multicore-lib-cash": "^8.3.4",
    "multicore-p2p-cash": "^8.3.4"
  }

```

We could add this module by adding `multicore-node-bch` to the modules array in multicore.config.json

```
    modules: ['./bitcoin', 'multicore-node-bch'],
```
