var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var SpeedConverter = require('../../../src/helpers/converters/SpeedConverter');

describe('#Distance SpeedConverter works', function () {

    describe('Conversions knots', function () {

        it('Converts knots to mph', function () {

            var knots = 10;
            var expected_result = 11.5078;

            SpeedConverter.knotsToMilesPerHour(knots, 4).should.equal(expected_result);
            SpeedConverter.knotsTo('MilesPerHour', knots, 4).should.equal(expected_result);
        }); 

        it('Converts knots to km/h', function () {

            var knots = 11;
            var expected_result = 12.6586;

            SpeedConverter.knotsToMilesPerHour(knots, 4).should.equal(expected_result);
            SpeedConverter.knotsTo('MilesPerHour', knots, 4).should.equal(expected_result);
        }); 

        it('Converts knots to m/s', function () {

            var knots = 15;
            var expected_result = 7.7167;

            SpeedConverter.knotsToMetersPerSecond(knots, 4).should.equal(expected_result);
            SpeedConverter.knotsTo('MetersPerSecond', knots, 4).should.equal(expected_result);
        }); 
    });

    describe('Conversions mph', function () {

        it('Converts mph to knots', function () {

            var mph = 10;
            var expected_result = 8.6898;

            SpeedConverter.mphToKnots(mph, 4).should.equal(expected_result);
            SpeedConverter.mphTo('Knots', mph, 4).should.equal(expected_result);
        }); 

        it('Converts mph to km/h', function () {

            var mph = 11;
            var expected_result = 17.7027;

            SpeedConverter.mphToKilometersPerHour(mph, 4).should.equal(expected_result);
            SpeedConverter.mphTo('KilometersPerHour', mph, 4).should.equal(expected_result);
        }); 

        it('Converts mph to m/s', function () {

            var mph = 15;
            var expected_result = 6.7056;

            SpeedConverter.mphToMetersPerSecond(mph, 4).should.equal(expected_result);
            SpeedConverter.mphTo('MetersPerSecond', mph, 4).should.equal(expected_result);
        }); 
    });

    describe('Conversions m/s', function () {

        it('Converts m/s to knots', function () {

            var metersPerSecond = 10;
            var expected_result = 19.4384;

            SpeedConverter.mpsToKnots(metersPerSecond, 4).should.equal(expected_result);
            SpeedConverter.mpsTo('Knots', metersPerSecond, 4).should.equal(expected_result);
        }); 

        it('Converts m/s to km/h', function () {

            var metersPerSecond = 11;
            var expected_result = 39.6;

            SpeedConverter.mpsToKilometersPerHour(metersPerSecond, 4).should.equal(expected_result);
            SpeedConverter.mpsTo('KilometersPerHour', metersPerSecond, 4).should.equal(expected_result);
        }); 

        it('Converts m/s to mph', function () {

            var metersPerSecond = 15;
            var expected_result = 33.5540;

            SpeedConverter.mpsToMilesPerHour(metersPerSecond, 4).should.equal(expected_result);
            SpeedConverter.mpsTo('MilesPerHour', metersPerSecond, 4).should.equal(expected_result);
        }); 
    });

});
