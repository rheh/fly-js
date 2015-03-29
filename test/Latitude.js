var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var Latitude = require('../src/Latitude');
var Rounder = require('../src/helpers/math/Rounder');

describe('#Latitude object works', function() {

    describe('Data validation', function () {

        it('throws an Exception when passed longitude < 90 degrees', function() {
            var degrees = -100;
            assert.throw(function () {
                var latitude = new Latitude(degrees);
            }, Error, "Invalid Latitude value");
        });

        it('throws an Exception when passed longitude > 90 degrees', function() {
            var degrees = 91;
            assert.throw(function () {
                var latitude = new Latitude(degrees);
            }, Error, "Invalid Latitude value");
        });

        it('returns the degrees value passed in during creation', function() {
            var degrees = 52.201;
            var latitude = new Latitude(degrees);
            latitude.getDegrees().should.equal(degrees);
        });

        it('Corretly categories North value', function() {
            var degrees = 76.1;
            var latitude = new Latitude(degrees);

            latitude.isNorth().should.equal(true);
            latitude.isEquator().should.equal(false);
            latitude.isSouth().should.equal(false);
        });

        it('Corretly categories Equatorial values ', function() {
            var degrees = 0;
            var latitude = new Latitude(degrees);

            latitude.isNorth().should.equal(false);
            latitude.isEquator().should.equal(true);
            latitude.isSouth().should.equal(false);
        });

        it('Corretly categories South values ', function() {
            var degrees = -10;
            var latitude = new Latitude(degrees);

            latitude.isNorth().should.equal(false);
            latitude.isEquator().should.equal(false);
            latitude.isSouth().should.equal(true);
        });
    });

    describe('Setters', function () {

        it('Sets and gets degrees', function() {

            var degrees = -10;
            var latitude = new Latitude(0);
            latitude.setDegrees(degrees);

            latitude.getDegrees().should.equal(degrees);
        });

        it('Degrees set and get radians', function() {

            var degrees = -10;
            var radians = -0.17;
            var latitude = new Latitude(0);
            latitude.setDegrees(degrees);

            Rounder.round(latitude.getRadians(), 2).should.equal(radians);
        });

        it('Radians set and get degrees', function() {

            var radians = -0.17;
            var degrees = -10;
            var latitude = new Latitude(0);
            latitude.setRadians(-0.174532925199433);

            Rounder.round(latitude.getDegrees(), 2).should.equal(degrees);
        });

    });
});
