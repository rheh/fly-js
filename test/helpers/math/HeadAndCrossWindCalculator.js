var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var headAndCrossWindCalculator = require('../../../src/helpers/math/HeadAndCrossWindCalculator');

describe('Head wind and cross wind calculator functions', function() {

    it('Cross wind calculation', function() {

        var windSpeed = 8;
        var windDirection = 100;
        var aircraftDirection = 60;

        var expectedCrossWind = 5.14;

        headAndCrossWindCalculator.calculate(windSpeed, windDirection, aircraftDirection, 2);
        headAndCrossWindCalculator.getCrossWind().should.equal(expectedCrossWind);
    }); 
    
    it('Head wind calculation', function() {

        var windSpeed = 8;
        var windDirection = 100;
        var aircraftDirection = 60;

        var expectedHeadWind = 6.13;

        headAndCrossWindCalculator.calculate(windSpeed, windDirection, aircraftDirection, 2);
        headAndCrossWindCalculator.getHeadWind().should.equal(expectedHeadWind);
    });
    
    it('Direct Head wind calculation', function() {

        var windSpeed = 80;
        var windDirection = 90;
        var aircraftDirection = 270;

        var expectedHeadWind = -windSpeed;

        headAndCrossWindCalculator.calculate(windSpeed, windDirection, aircraftDirection, 2);
        headAndCrossWindCalculator.getHeadWind().should.equal(expectedHeadWind);
        headAndCrossWindCalculator.getCrossWind().should.equal(0);
    });
});
