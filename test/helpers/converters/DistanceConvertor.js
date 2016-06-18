var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var DistanceConverter = require('../../../src/helpers/converters/DistanceConverter');

describe('#Distance DistanceConverter works', function () {

    describe('Shared component tests', function () {

        it('Shared Multipler conversion test', function () {

            var value = 10;
            var factor = 10;
            var expected_result = 100;

            DistanceConverter.convertMultipler(value, factor, 2).should.equal(expected_result);
        });
    });

    describe('Conversion for nautical miles', function () {

        it('Shared Multipler conversion test', function () {

            var value = 10;
            var factor = 10;
            var expected_result = 100;

            DistanceConverter.convertMultipler(value, factor, 2).should.equal(expected_result);
        });

        it('Converts nautical miles to miles', function () {

            var nauticalMiles = 10;
            var expected_result = 11.5078;

            DistanceConverter.nauticalMilesToMiles(nauticalMiles, 4).should.equal(expected_result);
            DistanceConverter.nauticalMilesTo('Miles', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to miles rounded to 2 decimal places', function () {

            var nauticalMiles = 10;
            var expected_result = 11.51;

            DistanceConverter.nauticalMilesToMiles(nauticalMiles, 2).should.equal(expected_result);
            DistanceConverter.nauticalMilesTo('Miles', nauticalMiles, 2).should.equal(expected_result);
        });

        it('Converts nautical miles to kilometers', function () {

            var nauticalMiles = 10;
            var expected_result = 18.52;

            DistanceConverter.nauticalMilesToKilometres(nauticalMiles, 4).should.equal(expected_result);
            DistanceConverter.nauticalMilesTo('Kilometres', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to feet', function () {

            var nauticalMiles = 10;
            var expected_result = 60761.2;

            DistanceConverter.nauticalMilesToFeet(nauticalMiles, 4).should.equal(expected_result);
            DistanceConverter.nauticalMilesTo('Feet', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to metres', function () {

            var nauticalMiles = 10;
            var expected_result = 18520;

            DistanceConverter.nauticalMilesToMetres(nauticalMiles, 4).should.equal(expected_result);
            DistanceConverter.nauticalMilesTo('Metres', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to inches', function () {

            var nauticalMiles = 10;
            var expected_result = 729134;

            DistanceConverter.nauticalMilesToInches(nauticalMiles, 4).should.equal(expected_result);
            DistanceConverter.nauticalMilesTo('Inches', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to centimeter', function () {

            var nauticalMiles = 10;
            var expected_result = 1852000;

            DistanceConverter.nauticalMilesToCentimetres(nauticalMiles, 4).should.equal(expected_result);
            DistanceConverter.nauticalMilesTo('Centimetres', nauticalMiles, 4).should.equal(expected_result);
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

            DistanceConverter.milesToKilometres(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('Kilometres', miles, 4).should.equal(expected_result);
        });

        it('Converts miles to feet', function () {

            var miles = 13;
            var expected_result = 68640;

            DistanceConverter.milesToFeet(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('Feet', miles, 4).should.equal(expected_result);
        });

        it('Converts miles to metres', function () {

            var miles = 33;
            var expected_result = 53108.352;

            DistanceConverter.milesToMetres(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('Metres', miles, 4).should.equal(expected_result);
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

            DistanceConverter.milesToCentimetres(miles, 4).should.equal(expected_result);
            DistanceConverter.milesTo('Centimetres', miles, 4).should.equal(expected_result);
        });
    });

    describe('Conversion for kilometres', function () {

        it('Converts kilometres to nautical miles', function () {

            var kilometres = 20;
            var expected_result = 10.7991;

            DistanceConverter.kilometresToNauticalMiles(kilometres, 4).should.equal(expected_result);
            DistanceConverter.kilometresTo('NauticalMiles', kilometres, 4).should.equal(expected_result);
        });

        it('Converts kilometres to miles', function () {

            var kilometres = 15;
            var expected_result = 9.3206;

            DistanceConverter.kilometresToMiles(kilometres, 4).should.equal(expected_result);
            DistanceConverter.kilometresTo('Miles', kilometres, 4).should.equal(expected_result);
        });

        it('Converts kilometres to feet', function () {

            var kilometres = 13;
            var expected_result = 42650.9187;

            DistanceConverter.kilometresToFeet(kilometres, 4).should.equal(expected_result);
            DistanceConverter.kilometresTo('Feet', kilometres, 4).should.equal(expected_result);
        });

        it('Converts kilometres to metres', function () {

            var kilometres = 33;
            var expected_result = 33000;

            DistanceConverter.kilometresToMetres(kilometres, 4).should.equal(expected_result);
            DistanceConverter.kilometresTo('Metres', kilometres, 4).should.equal(expected_result);
        });

        it('Converts kilometres to inches', function () {

            var kilometres = 33;
            var expected_result = 1299212.5971;

            DistanceConverter.kilometresToInches(kilometres, 4).should.equal(expected_result);
            DistanceConverter.kilometresTo('Inches', kilometres, 4).should.equal(expected_result);
        });

        it('Converts kilometres to centimeter', function () {

            var kilometres = 41;
            var expected_result = 4100000;

            DistanceConverter.kilometresToCentimetres(kilometres, 4).should.equal(expected_result);
            DistanceConverter.kilometresTo('Centimetres', kilometres, 4).should.equal(expected_result);
        });
    });
});
