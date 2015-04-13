var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var DistanceConverter = require('../../../src/helpers/converters/DistanceConverter');

describe('#Distance DistanceConverter works', function () {

    describe('Conversion for nautical miles', function () {

        it('Converts nautical miles to miles', function () {

            var nauticalMiles = 10;
            var expected_result = 11.5078;

            DistanceConverter.nauticalMilesToMiles(nauticalMiles, 4).should.equal(expected_result);
            DistanceConverter.nauticalMilesTo('Miles', nauticalMiles, 4).should.equal(expected_result);
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
            var expected_result = 53108.352

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
});
