"use strict";

var Latitude = require('../src/Latitude');
var Longitude = require('../src/Longitude');
var AngleHelper = require('../src/helpers/AngleHelper')

var Point = function (latitude, longitude) {

    if (!latitude) {
        throw new Error("Invalid Latitude");
    }

    if (!longitude) {
        throw new Error("Invalid Longitude");
    }

    this.latitude = latitude;
    this.longitude = longitude;
}

Point.prototype.distanceTo = function (to) {

    var lat1 = this.latitude.getRadians();
    var lon1 = this.longitude.getRadians();

    var lat2 = to.latitude.getRadians();
    var lon2 = to.longitude.getRadians();

    var angle = new AngleHelper();

    var distanceRadians = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));
    return distanceRadians * 180 * 60 / Math.PI;
};

module.exports = Point;
