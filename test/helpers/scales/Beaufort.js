var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var beaufortScale = require('../../../src/helpers/scales/Beaufort');

describe('#Beaufort scale look up', function () {

    it('Lookup fails gracefully when passed bad lookup value', function () {

        var wind = 55;
        var expected_result = {
            "force": 10,
            "description": "Storm",
            "windspeed": {
                "lower": 48,
                "upper": 55
            }
        };

        beaufortScale.lookup(wind, 'badvalue').should.deep.equal(expected_result);
    });

    it('Lookup fails gracefully when passed bad wind', function () {

        var wind = -55;
        var expected_result = {
            "force": 10,
            "description": "Storm",
            "windspeed": {
                "lower": 48,
                "upper": 55
            }
        };

        var match = beaufortScale.lookup(wind);
        expect(match).to.be.null;
    });

    it('Lookup description for high wind', function () {

        var wind = 90;
        var expected_result = 'Hurricane';

        beaufortScale.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for low winds', function () {

        var wind = 1;
        var expected_result = 'Light Air';

        beaufortScale.lookup(wind).should.equal(expected_result);
    });

    it('Lookup force index for low winds', function () {

        var wind = 2;
        var expected_result = 1;

        beaufortScale.lookup(wind, 'force').should.equal(expected_result);
    });

    it('Lookup force index for high winds', function () {

        var wind = 55;
        var expected_result = 10;

        beaufortScale.lookup(wind, 'force').should.equal(expected_result);
    });

});
