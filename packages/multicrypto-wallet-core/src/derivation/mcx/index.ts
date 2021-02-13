const BitcoreLibMcx = require('multicore-lib-mcx');
import { AbstractBitcoreLibDeriver } from '../btc';
export class McxDeriver extends AbstractBitcoreLibDeriver {
  multicoreLib = BitcoreLibMcx;
  deriveAddress(network, pubKey, addressIndex, isChange) {
    const xpub = new this.multicoreLib.HDPublicKey(pubKey, network);
    const changeNum = isChange ? 1 : 0;
    const path = `m/${changeNum}/${addressIndex}`;
    return this.multicoreLib.Address(xpub.derive(path).publicKey, network).toString(true);
  }

  derivePrivateKey(network, xPriv, addressIndex, isChange) {
    const xpriv = new this.multicoreLib.HDPrivateKey(xPriv, network);
    const changeNum = isChange ? 1 : 0;
    const path = `m/${changeNum}/${addressIndex}`;
    const privKey = xpriv.derive(path).privateKey;
    const pubKey = privKey.publicKey;
    const address = this.multicoreLib.Address(pubKey, network).toString(true);
    return { address, privKey: privKey.toString(), pubKey: pubKey.toString() };
  }
}
