/*jslint node: true */
"use strict";

var AngleConverter = require('../src/helpers/converters/AngleConverter');

var validate = function (degrees) {
    return degrees >= -180.00 && degrees <= 180.00;
};

var Longitude = function (degrees) {
    this.setDegrees(degrees);
};

Longitude.prototype.setDegrees = function (degrees) { 
    
    if (!validate(degrees)) {
        throw new Error("Invalid Longitude value");
    }

    this.degrees = degrees;
    this.radians = AngleConverter.degToRad(degrees);
};

Longitude.prototype.setRadians = function (radians) {

    var degrees = AngleConverter.radToDeg(radians);

    if (!validate(degrees)) {
        throw new Error("Invalid Longitude value");
    }

    this.degrees = degrees;
    this.radians = radians;
};

Longitude.prototype.getDegrees = function () {
    return this.degrees;
};

Longitude.prototype.getRadians = function () {
    return this.radians;
};

Longitude.prototype.isWest = function () {
    return this.degrees < 0;
};

Longitude.prototype.isMeridian = function () {
    return this.degrees === 0;
};

Longitude.prototype.isEast = function () {
    return this.degrees > 0;
};

module.exports = Longitude;
