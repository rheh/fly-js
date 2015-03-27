var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var convertor = require('../../../src/helpers/convertors/DistanceConvertor');

describe('#Distance convertor works', function () {

    describe('Conversions', function () {

        it('Converts nautical miles to miles', function () {

            var nauticalMiles = 10;
            var expected_result = 11.5078;
            //var convertor = new DistanceConvertor();

            convertor.nauticalMilesToMiles(nauticalMiles, 4).should.equal(expected_result);
            convertor.nauticalMilesTo('Miles', nauticalMiles, 4).should.equal(expected_result);
        }); 
        
        it('Converts nautical miles to kilometers', function () {

            var nauticalMiles = 10;
            var expected_result = 18.52;
            //var convertor = new DistanceConvertor();

            convertor.nauticalMilesToKilometres(nauticalMiles, 4).should.equal(expected_result);
            convertor.nauticalMilesTo('Kilometres', nauticalMiles, 4).should.equal(expected_result);
        });
        
        it('Converts nautical miles to feet', function () {

            var nauticalMiles = 10;
            var expected_result = 60761.2;
            //var convertor = new DistanceConvertor();

            convertor.nauticalMilesToFeet(nauticalMiles, 4).should.equal(expected_result);
            convertor.nauticalMilesTo('Feet', nauticalMiles, 4).should.equal(expected_result);
        });
        
        it('Converts nautical miles to metres', function () {

            var nauticalMiles = 10;
            var expected_result = 18520;
            //var convertor = new DistanceConvertor();

            convertor.nauticalMilesToMetres(nauticalMiles, 4).should.equal(expected_result);
            convertor.nauticalMilesTo('Metres', nauticalMiles, 4).should.equal(expected_result);
        });        

        it('Converts nautical miles to inches', function () {

            var nauticalMiles = 10;
            var expected_result = 729134;
            //var convertor = new DistanceConvertor();

            convertor.nauticalMilesToInches(nauticalMiles, 4).should.equal(expected_result);
            convertor.nauticalMilesTo('Inches', nauticalMiles, 4).should.equal(expected_result);
        });

        it('Converts nautical miles to centimeter', function () {

            var nauticalMiles = 10;
            var expected_result = 1852000;
            //var convertor = new DistanceConvertor();

            convertor.nauticalMilesToCentimetres(nauticalMiles, 4).should.equal(expected_result);
            convertor.nauticalMilesTo('Centimetres', nauticalMiles, 4).should.equal(expected_result);
        });
    });
});
