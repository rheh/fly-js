var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var DistanceConverter = require('../../../src/helpers/converters/DistanceConverter');

describe('#Distance DistanceConverter works', function () {

    describe('Conversions', function () {

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
});
