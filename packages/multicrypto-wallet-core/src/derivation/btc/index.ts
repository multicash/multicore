const BitcoreLib = require('multicore-lib');
import { IDeriver } from '..';
export abstract class AbstractBitcoreLibDeriver implements IDeriver {
  public abstract multicoreLib;

  deriveAddress(network, pubKey, addressIndex, isChange) {
    const xpub = new this.multicoreLib.HDPublicKey(pubKey, network);
    const changeNum = isChange ? 1 : 0;
    const path = `m/${changeNum}/${addressIndex}`;
    return this.multicoreLib.Address(xpub.derive(path).publicKey, network).toString();
  }

  derivePrivateKey(network, xPriv, addressIndex, isChange) {
    const xpriv = new this.multicoreLib.HDPrivateKey(xPriv, network);
    const changeNum = isChange ? 1 : 0;
    const path = `m/${changeNum}/${addressIndex}`;
    const privKey = xpriv.derive(path).privateKey;
    const pubKey = privKey.publicKey;
    const address = this.multicoreLib.Address(pubKey, network).toString();
    return { address, privKey: privKey.toString(), pubKey: pubKey.toString() };
  }
}
export class BtcDeriver extends AbstractBitcoreLibDeriver {
  multicoreLib = BitcoreLib;
}
