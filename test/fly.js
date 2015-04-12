var should = require('chai').should(),
    fly = require('../fly');

describe('#Check API calls are accessible', function() {

  it('Calculates distance betweeen two point API call accessible', function() {
    fly.distanceTo(58.2, 0, 53.3, -1.2, 2).should.equal(296.77);
  });

  it('Calculates initial course API call accessible', function() {
    fly.trueCourse(58.2, 0, 53.3, -1.2, 2).should.equal(352.65);
  });

  it('Beaufort lookup API call accessible', function() {
    fly.beaufortLookup(35, 'force').should.equal(8);
  });

  it('Nautical miles API call accessible', function() {
    fly.nauticalMilesTo('Miles', 523, 2).should.equal(601.86);
  });

  it('Miles API call accessible', function() {
    fly.mpsTo('Knots', 601.86, 2).should.equal(1169.92);
  });

  it('Miles per hour API call accessible', function() {
    fly.knotsTo('MilesPerHour', 23, 2).should.equal(26.47);
  });

  it('Miles per hour API call accessible', function() {
    fly.mphTo('MetresPerSecond', 26.47, 2).should.equal(11.83);
  });

  it('Head wind API call accessible', function() {
    fly.HeadWindCalculator(25, 180, 215, 2).should.equal(20.48);
  });

  it('Cross wind API call accessible', function() {
    fly.CrossWindCalculator(25, 180, 215, 2).should.equal(-14.34);
  });
});
