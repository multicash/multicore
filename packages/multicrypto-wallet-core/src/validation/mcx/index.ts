import { IValidation } from '..';
const BitcoreMcx = require('multicore-lib-mcx');

export class McxValidation implements IValidation {
  validateAddress(network: string, address: string): boolean {
    const AddressCash = BitcoreMcx.Address;
    // Regular Address: try multicash
    return AddressCash.isValid(address, network);
  }

  validateUri(addressUri: string): boolean {
    // Check if the input is a valid uri or address
    const URICash = BitcoreMcx.URI;
    // Bip21 uri
    return URICash.isValid(addressUri);
  }
}
