import { BaseModule } from '..';
import { MCXStateProvider } from '../../providers/chain-state/mcx/mcx';
import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { VerificationPeer } from '../bitcoin/VerificationPeer';

export default class BCHModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('BCH', 'multicore-lib-cash', 'multicore-p2p-cash');
    services.P2P.register('BCH', BitcoinP2PWorker);
    services.CSP.registerService('BCH', new MCXStateProvider());
    services.Verification.register('BCH', VerificationPeer);
  }
}
