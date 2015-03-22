var should = require('chai').should(),
    fly = require('../fly');

describe('#distanceTo', function() {

  it('calculates the distance betweeen two point;', function() {
    fly.distanceTo(null, null).should.equal(0);
  });

})
