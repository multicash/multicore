import _ from 'lodash';
import { BitcoreLib, BitcoreLibMcx } from 'multicrypto-wallet-core';
import { IChain } from '..';
import { BtcChain } from '../btc';

const Errors = require('../../errors/errordefinitions');

export class McxChain extends BtcChain implements IChain {
  constructor() {
    super(BitcoreLibMcx);
    this.feeSafetyMargin = 0.1;
  }

  validateAddress(wallet, inaddr, opts) {
    const A = BitcoreLibMcx.Address;
    let addr: {
      network?: string;
      toString?: (cashAddr: boolean) => string;
    } = {};
    try {
      addr = new A(inaddr);
    } catch (ex) {
      throw Errors.INVALID_ADDRESS;
    }
    if (addr.network.toString() != wallet.network) {
      throw Errors.INCORRECT_ADDRESS_NETWORK;
    }
    return;
  }
}
