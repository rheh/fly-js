var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var WindTriangleCalculator = require('../../../src/helpers/math/WindTriangleCalculator');

describe('Wind Triangle calculator functions', function () {

    it('wind direction calculation given true air speed, ground speed, course and heading', function () {

        var trueAirSpeed = 120; // knots
        var groundSpeed = 100; // knots
        var course = 60; // degrees
        var heading = 80; // degrees

        var expectedWindDirection = 132.73; // degrees

        WindTriangleCalculator.calculateWindSpeedAndDirection(trueAirSpeed, groundSpeed, heading, course, 2);
        var windDirection = WindTriangleCalculator.getWindDirection();
        (windDirection).should.equal(expectedWindDirection);
    });

    it('wind speed calculation given true air speed, ground speed, course and heading', function () {

        var trueAirSpeed = 120; // knots
        var groundSpeed = 100; // knots
        var course = 60; // degrees
        var heading = 80; // degrees

        var expectedWindSpeed = 42.98; // knots

        WindTriangleCalculator.calculateWindSpeedAndDirection(trueAirSpeed, groundSpeed, course, heading, 2);
        var windSpeed = WindTriangleCalculator.getWindSpeed();
        (windSpeed).should.equal(expectedWindSpeed);
    });

    it('Heading calculation given true air speed, course, wind speed and wind direction', function () {

        var trueAirSpeed = 120; // knots
        var course = 60; // degrees
        var windSpeed = 42.98; // knots
        var windDirection = 132.73; // degrees

        var expectedHeading = 80; // degrees

        WindTriangleCalculator.calculateHeadingAndGroundSpeed(trueAirSpeed, course, windSpeed, windDirection, 2);
        var heading = WindTriangleCalculator.getHeading();
        (heading).should.equal(expectedHeading);
    });

    it('Ground Speed calculation given true air speed, course, wind speed and wind direction', function () {

        var trueAirSpeed = 120; // knots
        var course = 60; // degrees
        var windSpeed = 42.98; // knots
        var windDirection = 132.73; // degrees

        var expectedGroundSpeed = 100; // knots

        WindTriangleCalculator.calculateHeadingAndGroundSpeed(trueAirSpeed, course, windSpeed, windDirection, 2);
        var groundSpeed = WindTriangleCalculator.getGroundSpeed();
        (groundSpeed).should.equal(expectedGroundSpeed);
    });

    it('Ground Speed calculation given true air speed, course, huge wind speed and wind direction', function () {

        var trueAirSpeed = 120; // knots
        var course = 60; // degrees
        var windSpeed = 120.98; // knots
        var windDirection = 132.73; // degrees

        assert.throw(function () {
            WindTriangleCalculator.calculateHeadingAndGroundSpeed(trueAirSpeed, course, windSpeed, windDirection, 2);
        }, Error, "course cannot be flown - wind too strong");
    });

    it('Ground Speed calculation given true air speed, heading, wind speed and wind direction', function () {

        var trueAirSpeed = 120; // knots
        var heading = 80; // degrees
        var windSpeed = 42.98; // knots
        var windDirection = 132.73; // degrees

        var expectedGroundSpeed = 100; // knots

        WindTriangleCalculator.calculateCourseAndGroundSpeed(trueAirSpeed, heading, windSpeed, windDirection, 2);
        var groundSpeed = WindTriangleCalculator.getGroundSpeed();
        (groundSpeed).should.equal(expectedGroundSpeed);
    });

    it('Course calculation given true air speed, heading, wind speed and wind direction', function () {

        var trueAirSpeed = 120; // knots
        var heading = 80; // degrees
        var windSpeed = 42.98; // knots
        var windDirection = 132.73; // degrees

        var expectedCourse = 60; // knots

        WindTriangleCalculator.calculateCourseAndGroundSpeed(trueAirSpeed, heading, windSpeed, windDirection, 2);
        var course = WindTriangleCalculator.getCourse();
        (course).should.equal(expectedCourse);
    });
});
