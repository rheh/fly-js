var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var wakeLookup = require('../../../src/helpers/scales/Wake');

describe('#Wake look up', function () {

    it('Negative number rejected', function () {

        var weightKg = -10;
        var expected_result = null;

        assert.throw(function () {
            wakeLookup.lookup(weightKg);
        }, "Negative weight not permitted");

    });

    it('Lookup zero equates to  L (light)', function () {

        var weightKg = 0;
        var expected_result = 'L';

        wakeLookup.lookup(weightKg).should.deep.equal(expected_result);
    });

    it('Lookup of 6999kg equates to L (light)', function () {

        var weightKg = 6999;
        var expected_result = 'L';

        wakeLookup.lookup(weightKg).should.deep.equal(expected_result);
    });

    it('Lookup of 7000kg equates to M (Medium)', function () {

        var weightKg = 7000;
        var expected_result = 'M';

        wakeLookup.lookup(weightKg).should.deep.equal(expected_result);
    });

    it('Lookup of 135999kg equates to M (Medium)', function () {

        var weightKg = 135999;
        var expected_result = 'M';

        wakeLookup.lookup(weightKg).should.deep.equal(expected_result);
    });

    it('Lookup of 140000kg equates to H (Heavy)', function () {

        var weightKg = 140000;
        var expected_result = 'H';

        wakeLookup.lookup(weightKg).should.deep.equal(expected_result);
    });

});
