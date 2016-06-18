var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var Latitude = require('../src/Latitude');
var Longitude = require('../src/Longitude');

var Point = require('../src/Point');
var Rounder = require('../src/helpers/math/Rounder');

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

    describe('Enroute calulation works given true course and distance', function () {

        it('Calculates the new point given true course and distance from LAX', function() {

            var LAX = new Point(new Latitude(33.9499839), new Longitude(118.400009));
            var trueCourse = 66;
            var distanceNm = 100;

            var JFK = LAX.enroute(trueCourse, distanceNm);

            var newLat = JFK.getLatitude().getDegrees();
            Rounder.round(newLat, 2).should.equal(34.63);

            var newLon = JFK.getLongitude().getDegrees();
            Rounder.round(newLon, 2).should.equal(116.49);
        });
    });

    describe('Intersection of two radial test', function () {

        it('Calculates the intersection point given Humberside Airport (HUY) and London Gatwick (LGW)', function() {

            var HUY = new Point(new Latitude(53.583378), new Longitude(-0.34851), 180);
            var LGW = new Point(new Latitude(51.150837), new Longitude(-0.177416), 15);

            // Humberside Airport (Centre of the Universe)
            var intersectionPoint = HUY.intersectionPoint(LGW);

            var newLat = intersectionPoint.getLatitude().getDegrees();
            Rounder.round(newLat, 2).should.equal(52.66);

            var newLon = intersectionPoint.getLongitude().getDegrees();
            Rounder.round(newLon, 2).should.equal(-0.35);
        });

        it('Calculates the intersection point given Rome State Airport (REO) and Baker Airport (BKE)', function() {

            var REO = new Point(new Latitude(42.833332), new Longitude(-117.61667), 51);
            var BKE = new Point(new Latitude(44.838333), new Longitude(-117.81), 137);

            // Boise Airport
            var BOI = REO.intersectionPoint(BKE);

            var newLat = BOI.getLatitude().getDegrees();
            Rounder.round(newLat, 2).should.equal(44.88);

            var newLon = BOI.getLongitude().getDegrees();
            Rounder.round(newLon, 2).should.equal(-121.29);
        });

        it('Calculates the intersection point given Manchester Airport (MAN) and Sanford (SFB)', function() {

            var SFB = new Point(new Latitude(28.775118), new Longitude(-81.2432), 67.16);
            var MAN = new Point(new Latitude(53.362907), new Longitude(-2.273354), 247.16);

            // Boise Airport
            var intersectionPoint = SFB.intersectionPoint(MAN);
            (intersectionPoint).should.equal('No intersection found');
        });
    });
});
