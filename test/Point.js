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
    });

    describe('Distance Calculations', function () {

        it('Calculates the distance between London and New York', function() {

            var london = new Point(new Latitude(51.5072), new Longitude(-0.1265));
            var newyork = new Point(new Latitude(40.7127), new Longitude(-74.0059));

            var distanceBetween = 3005.70;
            london.distanceTo(newyork, 2).should.equal(distanceBetween);
        });

        it('Calculates the distance bewteen Flugplatz Birrfeld and APS Taxi Qualitat Flughafen', function() {

            var place1 = new Point(new Latitude(47.44272), new Longitude(8.234888));
            var place2 = new Point(new Latitude(47.463335), new Longitude(8.323479));

            var distanceBetween = 3.80;
            place1.distanceTo(place2, 2).should.equal(distanceBetween);
        });

        it('Calculates the distance North Pole and North Pole', function() {

            var northPole = new Point(new Latitude(90.00), new Longitude(0.00));

            var distanceBetween = 0.00;
            northPole.distanceTo(northPole, 2).should.equal(distanceBetween);
        });

        it('Calculates the distance North Pole and South Pole', function() {

            var northPole = new Point(new Latitude(90.00), new Longitude(0.00));
            var southPole = new Point(new Latitude(-90.00), new Longitude(0.00));

            var distanceBetween = 10800;
            northPole.distanceTo(southPole, 2).should.equal(distanceBetween);
        });
    });

    describe('Course Calculations', function () {

        it('Calculates the true course between London and New York', function() {

            var london = new Point(new Latitude(51.5072), new Longitude(-0.1265));
            var newyork = new Point(new Latitude(40.7127), new Longitude(-74.0059));

            var course = 308.79;
            london.trueCourse(newyork, 2).should.equal(course);
        });

        it('Calculates the true course bewteen Flugplatz Birrfeld and APS Taxi Qualitat Flughafen', function() {

            var place1 = new Point(new Latitude(47.44272), new Longitude(8.234888));
            var place2 = new Point(new Latitude(47.463335), new Longitude(8.323479));

            var course = 108.96;
            place1.trueCourse(place2, 2).should.equal(course);
        });

        it('Calculates the true course North Pole and North Pole', function() {

            var northPole = new Point(new Latitude(90.00), new Longitude(0.00));

            var course = 180.00;
            northPole.trueCourse(northPole, 2).should.equal(course);
        });

        it('Calculates the true course between North Pole and South Pole', function() {

            var northPole = new Point(new Latitude(90.00), new Longitude(0.00));
            var southPole = new Point(new Latitude(-90.00), new Longitude(0.00));

            var course = 360.00;
            northPole.trueCourse(southPole, 2).should.equal(course);
        });
    });
});
