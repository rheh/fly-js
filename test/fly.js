var should = require('chai').should(),
    fly = require('../fly'),
    Rounder = require('../src/helpers/math/Rounder');

describe('#Check API calls are accessible', function () {

  it('Calculates distance betweeen two point API call accessible', function () {
    fly.distanceTo(58.2, 0, 53.3, -1.2, 2).should.equal(296.77);
  });

  it('Calculates initial course API call accessible', function () {
    fly.trueCourse(58.2, 0, 53.3, -1.2, 2).should.equal(352.65);
  });

  it('Beaufort lookup API call accessible', function () {
    fly.beaufortLookup(35, 'force').should.equal(8);
  });

  it('To Nautical miles API call accessible', function () {
    fly.nauticalMilesTo('Miles', 523, 2).should.equal(601.86);
  });

  it('To Miles API call accessible', function () {
    fly.milesTo('NauticalMiles', 6.47, 2).should.equal(5.62);
  });

  it('To Kilometers API call accessible', function () {
    fly.kilometresTo('Miles', 1000, 2).should.equal(621.37);
  });

  it('To Mles per second API call accessible', function () {
    fly.mpsTo('Knots', 601.86, 2).should.equal(1169.92);
  });

  it('Miles per hour API call accessible', function () {
    fly.knotsTo('MilesPerHour', 23, 2).should.equal(26.47);
  });

  it('Miles per hour API call accessible', function () {
    fly.mphTo('MetresPerSecond', 26.47, 2).should.equal(11.83);
  });


  it('Head wind API call accessible', function () {
    fly.HeadWindCalculator(25, 180, 215, 2).should.equal(20.48);
  });

  it('Cross wind API call accessible', function () {
    fly.CrossWindCalculator(25, 180, 215, 2).should.equal(-14.34);
  });

  it('Cardinal Wind Direction call accessible', function () {
    fly.CardinalWindDirection(180).should.equal("S");
  });

  it('Intersection point call accessible', function () {
    var intersectionPoint = fly.intersectionPoint(53.583378, -0.34851, 180, 51.150837, -0.177416, 15);

    var newLat = intersectionPoint.getLatitude().getDegrees();
    Rounder.round(newLat, 2).should.equal(52.66);

    var newLon = intersectionPoint.getLongitude().getDegrees();
    Rounder.round(newLon, 2).should.equal(-0.35);

  });

  it('Calculate WindSpeedAndDirection call accessible', function () {

    var trueAirSpeed = 120; // knots
    var groundSpeed = 100; // knots
    var course = 60; // degrees
    var heading = 80; // degrees

    var expectedWindDirection = 132.73; // degrees
    var expectedWindSpeed = 42.98; // knots

    var windSpeedAndDirection = fly.calculateWindSpeedAndDirection(trueAirSpeed, groundSpeed, heading, course, 2);

    (windSpeedAndDirection.windSpeed).should.equal(expectedWindSpeed);
    (windSpeedAndDirection.windDirection).should.equal(expectedWindDirection);
  });

  it('Calculate Course and Ground Speed call accessible', function () {

    var trueAirSpeed = 120; // knots
    var heading = 80; // degrees
    var windSpeed = 42.98; // knots
    var windDirection = 132.73; // degrees

    var expectedGroundSpeed = 100; // knots
    var expectedCourse = 100; // degrees

    var courseAndGroundSpeed = fly.calculateCourseAndGroundSpeed(trueAirSpeed, heading, windSpeed, windDirection, 2);

    // TODO:
    //(courseAndGroundSpeed.course).should.equal(expectedCourse);
    (courseAndGroundSpeed.groundSpeed).should.equal(expectedGroundSpeed);
  });

});
