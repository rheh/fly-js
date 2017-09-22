var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var DistanceConverter = require('../../../src/helpers/converters/DistanceConverter');

describe('#Distance DistanceConverter works', function () {

    describe('Invalid parameter tests', function () {

        it('Attempt to convert nautical miles to an unknown unit', function () {

            var nauticalMiles = 10;

            assert.throw(function() {
                DistanceConverter.nauticalMilesTo('Mars Miles',
                    nauticalMiles, 4);
            }, Error, 'Unknown conversion');
        });

        it('Attempt to convert miles to an unknown unit', function () {

            var nauticalMiles = 10;

            assert.throw(function() {
                DistanceConverter.milesTo('Mars Miles',
                    nauticalMiles, 4);
            }, Error, 'Unknown conversion');
        });

        it('Attempt to convert kilometers to an unknown unit', function () {

            var nauticalMiles = 10;

            assert.throw(function() {
                DistanceConverter.kilometersTo('Mars Miles',
                    nauticalMiles, 4);
            }, Error, 'Unknown conversion');
        });
    });

    describe('Conversion for nautical miles', function () {

        it('Converts nautical miles to miles', function () {

            var nauticalMiles = 10;
            var expected_result = 11.5078;

            DistanceConverter.nauticalMilesToMiles(nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to miles', function () {

            var nauticalMiles = 10;
            var expected_result = 11.5078;

            DistanceConverter.nauticalMilesTo('Miles', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to kilometers', function () {

            var nauticalMiles = 10;
            var expected_result = 18.52;

            DistanceConverter.nauticalMilesTo('Kilometers', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to kilometers using function call', function () {

            var nauticalMiles = 10;
            var expected_result = 18.52;

            DistanceConverter.nauticalMilesToKilometers(nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to feet', function () {

            var nauticalMiles = 10;
            var expected_result = 60761.2;

            DistanceConverter.nauticalMilesToFeet(nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to feet using function call', function () {

            var nauticalMiles = 10;
            var expected_result = 60761.2;

            DistanceConverter.nauticalMilesTo('Feet', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to meters', function () {

            var nauticalMiles = 10;
            var expected_result = 18520;

            DistanceConverter.nauticalMilesTo('Meters', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to meters using function call', function () {

            var nauticalMiles = 10;
            var expected_result = 18520;

            DistanceConverter.nauticalMilesToMeters(nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to inches', function () {

            var nauticalMiles = 10;
            var expected_result = 729134;

            DistanceConverter.nauticalMilesTo('Inches', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to inches using function call', function () {

            var nauticalMiles = 10;
            var expected_result = 729134;

            DistanceConverter.nauticalMilesToInches(nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to centimeter', function () {

            var nauticalMiles = 10;
            var expected_result = 1852000;

            DistanceConverter.nauticalMilesTo('Centimeters', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to centimeter using function call', function () {

            var nauticalMiles = 10;
            var expected_result = 1852000;

            DistanceConverter.nauticalMilesToCentimeters(nauticalMiles, 4).should.equal(expected_result);
        });

    });

    describe('Conversion for miles', function () {

        it('Converts miles to nautical miles', function () {

            var miles = 20;
            var expected_result = 17.3795;

            DistanceConverter.milesToNauticalMiles(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('NauticalMiles', miles, 4).should.equal(expected_result);
        });

        it('Converts miles to kilometers', function () {

            var miles = 15;
            var expected_result = 24.1402;

            DistanceConverter.milesToKilometers(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('Kilometers', miles, 4).should.equal(expected_result);
        });

        it('Converts miles to feet', function () {

            var miles = 13;
            var expected_result = 68640;

            DistanceConverter.milesToFeet(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('Feet', miles, 4).should.equal(expected_result);
        });

        it('Converts miles to meters', function () {

            var miles = 33;
            var expected_result = 53108.352;

            DistanceConverter.milesToMeters(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('Meters', miles, 4).should.equal(expected_result);
        });

        it('Converts miles to inches', function () {

            var miles = 33;
            var expected_result = 2090880;

            DistanceConverter.milesToInches(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('Inches', miles, 4).should.equal(expected_result);
        });

        it('Converts miles to centimeter', function () {

            var miles = 41;
            var expected_result = 6598310.4;

            DistanceConverter.milesToCentimeters(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('Centimeters', miles, 4).should.equal(expected_result);
        });
    });

    describe('Conversion for kilometers', function () {

        it('Converts kilometers to nautical miles', function () {

            var kilometers = 20;
            var expected_result = 10.7991;

            DistanceConverter.kilometersToNauticalMiles(kilometers, 4).should.equal(expected_result);
            DistanceConverter.kilometersTo('NauticalMiles', kilometers, 4).should.equal(expected_result);
        });

        it('Converts kilometers to miles', function () {

            var kilometers = 15;
            var expected_result = 9.3206;

            DistanceConverter.kilometersToMiles(kilometers, 4).should.equal(expected_result);
            DistanceConverter.kilometersTo('Miles', kilometers, 4).should.equal(expected_result);
        });

        it('Converts kilometers to feet', function () {

            var kilometers = 13;
            var expected_result = 42650.9187;

            DistanceConverter.kilometersToFeet(kilometers, 4).should.equal(expected_result);
            DistanceConverter.kilometersTo('Feet', kilometers, 4).should.equal(expected_result);
        });

        it('Converts kilometers to meters', function () {

            var kilometers = 33;
            var expected_result = 33000;

            DistanceConverter.kilometersToMeters(kilometers, 4).should.equal(expected_result);
            DistanceConverter.kilometersTo('Meters', kilometers, 4).should.equal(expected_result);
        });

        it('Converts kilometers to inches', function () {

            var kilometers = 33;
            var expected_result = 1299212.5971;

            DistanceConverter.kilometersToInches(kilometers, 4).should.equal(expected_result);
            DistanceConverter.kilometersTo('Inches', kilometers, 4).should.equal(expected_result);
        });

        it('Converts kilometers to centimeter', function () {

            var kilometers = 41;
            var expected_result = 4100000;

            DistanceConverter.kilometersToCentimeters(kilometers, 4).should.equal(expected_result);
            DistanceConverter.kilometersTo('Centimeters', kilometers, 4).should.equal(expected_result);
        });
    });
});
