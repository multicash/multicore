import { BaseModule } from '..';
import { BTCStateProvider } from '../../providers/chain-state/btc/btc';
import { BitcoinP2PWorker } from './p2p';
import { VerificationPeer } from './VerificationPeer';

export default class BitcoinModule extends BaseModule {
  constructor(services: BaseModule['multicoreServices']) {
    super(services);
    services.Libs.register('BTC', 'multicore-lib', 'multicore-p2p');
    services.P2P.register('BTC', BitcoinP2PWorker);
    services.CSP.registerService('BTC', new BTCStateProvider());
    services.Verification.register('BTC', VerificationPeer);
  }
}
