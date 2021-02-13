
'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var multicore = require('multicore-lib-mcx');
var utils = require('../utils');
var BufferReader = multicore.encoding.BufferReader;
var BufferWriter = multicore.encoding.BufferWriter;

/**
 * @param {Object=} options
 * @extends Message
 * @constructor
 */
function SendheadersMessage(arg, options) {
  Message.call(this, options);
  this.command = 'sendheaders';
}
inherits(SendheadersMessage, Message);

SendheadersMessage.prototype.setPayload = function (payload) {
  var parser = new BufferReader(payload);
  utils.checkFinished(parser);
};

SendheadersMessage.prototype.getPayload = function () {
  var bw = new BufferWriter();
  return bw.concat();
};

module.exports = SendheadersMessage;
