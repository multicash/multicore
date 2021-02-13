'use strict';

var Message = require('../../../../multicore-p2p-cash/lib/messages/message');
var inherits = require('util').inherits;
var multicore = require('multicore-lib-mcx');
var utils = require('../../../../multicore-p2p-cash/lib/messages/utils');
var BufferReader = multicore.encoding.BufferReader;
var BufferWriter = multicore.encoding.BufferWriter;

/**
 * @param {Object=} options
 * @param {Number=} options.feerate
 * @extends Message
 * @constructor
 */
function FeefilterMessage(arg, options) {
  Message.call(this, options);
  this.command = 'feefilter';
  this.feerate = options.feerate;
}
inherits(FeefilterMessage, Message);

FeefilterMessage.prototype.setPayload = function (payload) {
  var parser = new BufferReader(payload);

  this.feerate = parser.readUInt64LEBN();

  utils.checkFinished(parser);
};

FeefilterMessage.prototype.getPayload = function () {
  var bw = new BufferWriter();

  bw.writeUInt64LEBN(this.feerate);

  return bw.concat();
};

module.exports = FeefilterMessage;
