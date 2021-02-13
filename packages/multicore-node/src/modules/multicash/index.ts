import { BaseModule } from '..';
import { BTCStateProvider } from '../../providers/chain-state/btc/btc';
import { MultiCashP2PWorker } from './p2p';
import { VerificationPeer } from './VerificationPeer';

export default class MultiCashModule extends BaseModule {
  private readonly COIN_ID = 'MCX';

  constructor(services: BaseModule['multicoreServices']) {
    super(services);
    services.Libs.register(this.COIN_ID, 'multicore-lib-mcx', 'multicore-p2p-mcx');
    services.P2P.register(this.COIN_ID, MultiCashP2PWorker);
    services.CSP.registerService(this.COIN_ID, new BTCStateProvider());
    services.Verification.register(this.COIN_ID, VerificationPeer);
  }
}
