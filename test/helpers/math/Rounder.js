var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var Rounder = require('../../../src/helpers/math/Rounder');

describe('#Basic math rounding function works', function() {

    it('Rounds to zero decimal places', function() {

        var bigNumber = 10002983.37443674673;
        var result = 10002983;

        Rounder.round(bigNumber, 0).should.equal(result);
    });

    it('Rounds to two decimal places', function() {

        var bigNumber = 10002983.37443674673;
        var result = 10002983.37;

        Rounder.round(bigNumber, 2).should.equal(result);
    });

    it('Rounds to six decimal places', function() {

        var bigNumber = 10002983.37443674673;
        var result = 10002983.374437;

        Rounder.round(bigNumber, 6).should.equal(result);
    });

    it('Rounds to zero ten places', function() {

        var bigNumber = 10002983.37443674673;
        var result = 10002983.3744367467;

        Rounder.round(bigNumber, 10).should.equal(result);
    });
});
