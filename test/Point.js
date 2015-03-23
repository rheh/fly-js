var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var Latitude = require('../src/Latitude');
var Longitude = require('../src/Longitude');

var Point = require('../src/Point');

describe('#Point object works', function() {

    describe('Data validation', function () {

        it('throws an Exception when passing a null Latitude', function() {

            var longitude = new Longitude(12.1);

            assert.throw(function () {
                var point = new Point(null, longitude);
            }, Error, "Invalid Latitude");
        });

        it('throws an Exception when passing a null Longitude', function() {

            var latitude = new Latitude(12.1);

            assert.throw(function () {
                var point = new Point(latitude, null);
            }, Error, "Invalid Longitude");
        });

        it('Calculates the distance between London and New York', function() {

            var london = new Point(new Latitude(51.5072), new Longitude(-0.1265));
            var newyork = new Point(new Latitude(40.7127), new Longitude(-74.0059));

            var distanceBetween = 3005.702766131842;
            london.distanceTo(newyork).should.equal(distanceBetween);
        });
    });
})
