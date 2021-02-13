"use strict";

var should = require("chai").should();
var multicore = require("../");

describe('#versionGuard', function() {
  it('global._multicore should be defined', function() {
    should.equal(global._multicore, multicore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      multicore.versionGuard('version');
    }).should.throw('More than one instance of multicore');
  });
});
