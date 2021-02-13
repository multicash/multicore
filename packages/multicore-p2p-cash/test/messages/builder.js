'use strict';

var should = require('chai').should();
var P2P = require('../../');
var builder = P2P.Messages.builder;
var multicore = require('multicore-lib-cash');

describe('Messages Builder', function() {

  describe('@constructor', function() {

    it('should return commands based on default', function() {
      // instantiate
      var b = builder();
      should.exist(b);
    });

    it('should return commands with customizations', function() {
      // instantiate
      var b = builder({
        network: multicore.Networks.testnet,
        Block: multicore.Block,
        Transaction: multicore.Transaction
      });
      should.exist(b);
    });

  });

});
