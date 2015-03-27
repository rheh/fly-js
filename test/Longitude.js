var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var Longitude = require('../src/Longitude');

describe('#Longitude object works', function() {

    describe('Data validation', function () {

        it('throws an Exception when passed longitude < 180 degrees', function() {
            var degrees = -200;
            assert.throw(function () {
                var longitude = new Longitude(degrees);
            }, Error, "Invalid Longitude value");
        });

        it('throws an Exception when passed longitude > 180 degrees', function() {
            var degrees = 191;
            assert.throw(function () {
                var longitude = new Longitude(degrees);
            }, Error, "Invalid Longitude value");
        });

        it('returns the degrees value passed in during creation', function() {
            var degrees = -152.201;
            var longitude = new Longitude(degrees);
            longitude.getDegrees().should.equal(degrees);
        });

        it('Corretly categories West value', function() {
            var degrees = -76.1;
            var longitude = new Longitude(degrees);

            longitude.isWest().should.equal(true);
            longitude.isMeridian().should.equal(false);
            longitude.isEast().should.equal(false);
        });

        it('Corretly categories Equatorial values ', function() {
            var degrees = 0;
            var longitude = new Longitude(degrees);

            longitude.isWest().should.equal(false);
            longitude.isMeridian().should.equal(true);
            longitude.isEast().should.equal(false);
        });

        it('Corretly categories East values ', function() {
            var degrees = 10;
            var longitude = new Longitude(degrees);

            longitude.isWest().should.equal(false);
            longitude.isMeridian().should.equal(false);
            longitude.isEast().should.equal(true);
        });
    });
});
