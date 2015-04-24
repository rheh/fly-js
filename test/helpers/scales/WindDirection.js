var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var windCardinalDirection = require('../../../src/helpers/scales/WindCardinalDirection');

describe('#Wind cardinal direction look up', function () {

   it('Lookup fails gracefully when passed bad lookup value', function () {

        var wind = 505;
        var expected_result = null;
        var result = windCardinalDirection.lookup(wind);

        (result === null).should.be.true;
    });

    it('Lookup description for N between (348.75 - 11.25)', function () {

        var wind = 0.0;
        var expected_result = 'N';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for NNE between (11.25 - 33.75)', function () {

        var wind = 11.25;
        var expected_result = 'NNE';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for NE between (33.75 - 56.25)', function () {

        var wind = 33.78;
        var expected_result = 'NE';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for ENE between (56.25 - 78.75)', function () {

        var wind = 61.25;
        var expected_result = 'ENE';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for E between (78.75 - 101.25)', function () {

        var wind = 90;
        var expected_result = 'E';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for ESE between (101.25 - 123.75)', function () {

        var wind = 123;
        var expected_result = 'ESE';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for SE between (123.75 - 146.25)', function () {

        var wind = 143;
        var expected_result = 'SE';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for SSE between (146.25 - 168.75)', function () {

        var wind = 153;
        var expected_result = 'SSE';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for S between (168.75 - 191.25)', function () {

        var wind = 180;
        var expected_result = 'S';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for SSW between (191.25 - 213.75)', function () {

        var wind = 199;
        var expected_result = 'SSW';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for SW between (213.75 - 236.25)', function () {

        var wind = 231.5;
        var expected_result = 'SW';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for WSW between (236.25 - 258.75)', function () {

        var wind = 251.2;
        var expected_result = 'WSW';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for W between (258.75 - 281.25)', function () {

        var wind = 270;
        var expected_result = 'W';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for WNW between (281.25 - 303.75)', function () {

        var wind = 303;
        var expected_result = 'WNW';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for NW between (303.75 - 326.25)', function () {

        var wind = 313;
        var expected_result = 'NW';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });

    it('Lookup description for NNW between (326.25 - 348.75)', function () {

        var wind = 333;
        var expected_result = 'NNW';

        windCardinalDirection.lookup(wind).should.equal(expected_result);
    });
});
