/*jslint node: true */
"use strict";

var Latitude = require('../src/Latitude');
var Longitude = require('../src/Longitude');

var AngleConverter = require('../src/helpers/converters/AngleConverter');
var DistanceConverter = require('../src/helpers/converters/DistanceConverter');

function round (value, places) {
    return Math.round(value * Math.pow(10, places)) / Math.pow(10, places);
}

var Point = function (latitude, longitude) {

    if (!latitude) {
        throw new Error("Invalid Latitude");
    }

    if (!longitude) {
        throw new Error("Invalid Longitude");
    }

    this.latitude = latitude;
    this.longitude = longitude;
};

Point.prototype.getLatitude = function () {
    return this.latitude;
};

Point.prototype.getLongitude = function () {
    return this.longitude;
};

Point.prototype.setLatitude = function (latitude) {
    this.latitude = latitude;
};

Point.prototype.setLongitude = function (longitude) {
    this.longitude = longitude;
};

Point.prototype.distanceTo = function (to, roundTo) {

    var places = 15;

    if (roundTo) {
        places = roundTo;
    }

    var lat1 = this.latitude.getRadians();
    var lon1 = this.longitude.getRadians();

    var lat2 = to.latitude.getRadians();
    var lon2 = to.longitude.getRadians();

    var distanceRadians = this.distanceInRadians(to);

    return round(distanceRadians * 180 * 60 / Math.PI, places);
};

Point.prototype.distanceInRadians = function (to) {

    var lat1 = this.latitude.getRadians();
    var lon1 = this.longitude.getRadians();

    var lat2 = to.latitude.getRadians();
    var lon2 = to.longitude.getRadians();

    return Math.acos(Math.sin(lat1) * Math.sin(lat2) + 
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));
};

Point.prototype.trueCourse = function (to, roundTo) {

    var places = 15;

    if (roundTo) {
        places = roundTo;
    }

    var distanceRadians = this.distanceInRadians(to);

    var lat2 = this.latitude.getRadians();
    var lon2 = this.longitude.getRadians();

    var lat1 = to.latitude.getRadians();
    var lon1 = to.longitude.getRadians();

    var trueCourse = NaN;

    if (Math.cos(lat1) < 0.001) {

        if (lat1 > 0) {
            // starting from N pole
            trueCourse = Math.PI;
        } else {
            // starting from S pole
            trueCourse = 2 * Math.PI;
        }

    } else {

        if (Math.sin(lon2 - lon1) < 0) {  
            trueCourse = Math.acos((Math.sin(lat2) - Math.sin(lat1) * 
                Math.cos(distanceRadians)) / (Math.sin(distanceRadians) * Math.cos(lat1)));
        } else {
            trueCourse = 2 * Math.PI - Math.acos((Math.sin(lat2) - Math.sin(lat1) * 
                Math.cos(distanceRadians)) / (Math.sin(distanceRadians) * Math.cos(lat1)));
        }
    }

    return AngleConverter.radToDeg(trueCourse, roundTo);
};

Point.prototype.enroute = function (trueCourse, nauticalMiles, roundTo) {

    var lat1 = this.latitude.getRadians();
    var lon1 = this.longitude.getRadians();

    var distance = DistanceConverter.nauticalMilesToRadians(nauticalMiles);
    var trueCourseRad = AngleConverter.degToRad(trueCourse);

    var newLat = Math.asin(Math.sin(lat1) * Math.cos(distance) + Math.cos(lat1) * Math.sin(distance) * Math.cos(trueCourseRad));
    var newLon = ((lon1 - Math.asin(Math.sin(trueCourseRad) * Math.sin(distance) / Math.cos(newLat)) + Math.PI) % (2 * Math.PI)) - Math.PI;

    var enroutePoint = new Point(new Latitude(0.0), new Longitude(0.0));

    enroutePoint.getLatitude().setRadians(newLat);
    enroutePoint.getLongitude().setRadians(newLon);

    return enroutePoint;
};

module.exports = Point;
