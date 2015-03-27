var should = require('chai').should(),
    fly = require('../fly');

describe('#distanceTo', function() {

  it('calculates the distance betweeen two point;', function() {
    fly.distanceTo(58.2, 0, 53.3, -1.2, 2).should.equal(296.77);
  });

  it('calculates the initial course two point;', function() {
    fly.trueCourse(58.2, 0, 53.3, -1.2, 2).should.equal(352.65);
  });
});
