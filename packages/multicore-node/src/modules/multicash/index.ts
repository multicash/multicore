import { BaseModule } from '..';
import { BTCStateProvider } from '../../providers/chain-state/btc/btc';
import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { VerificationPeer } from '../bitcoin/VerificationPeer';

export default class MultiCashModule extends BaseModule {
  constructor(services: BaseModule['multicoreServices']) {
    super(services);
    services.Libs.register('MCX', 'multicore-lib-mcx', 'multicore-p2p-mcx');
    services.P2P.register('MCX', BitcoinP2PWorker);
    services.CSP.registerService('MCX', new BTCStateProvider());
    services.Verification.register('MCX', VerificationPeer);
  }
}
