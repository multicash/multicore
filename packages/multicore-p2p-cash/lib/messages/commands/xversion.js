'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var multicore = require('multicore-lib-cash');
var BufferUtil = multicore.util.buffer;

/**
 * Transports a generic key-value map that holds the configuration and version parameters.
 * https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/xversionmessage.md
 * Placeholder until it's actually made use of
 * @extends Message
 * @constructor
 */
function XversionMessage(arg, options) {
  Message.call(this, options);
  this.command = 'Xversion';
}
inherits(XversionMessage, Message);

XversionMessage.prototype.setPayload = function() {};

XversionMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = XversionMessage;
