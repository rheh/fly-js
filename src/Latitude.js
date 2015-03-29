/*jslint node: true */
"use strict";

var AngleConverter = require('../src/helpers/converters/AngleConverter');

var validate = function (degrees) {
    return degrees >= -90.00 && degrees <= 90.00;
};

var Latitude = function (degrees) {
    this.setDegrees(degrees);
};

Latitude.prototype.setRadians = function (radians) {

    var degrees = AngleConverter.radToDeg(radians);

    if (!validate(degrees)) {
        throw new Error("Invalid Latitude value");
    }

    this.degrees = degrees;
    this.radians = radians;
};

Latitude.prototype.setDegrees = function (degrees) {

    if (!validate(degrees)) {
        throw new Error("Invalid Latitude value");
    }

    this.degrees = degrees;
    this.radians = AngleConverter.degToRad(degrees);
};

Latitude.prototype.getDegrees = function () {
    return this.degrees;
};

Latitude.prototype.getRadians = function () {
    return this.radians;
};

Latitude.prototype.isNorth = function () {
    return this.degrees > 0;
};

Latitude.prototype.isEquator = function () {
    return this.degrees === 0;
};

Latitude.prototype.isSouth = function () {
    return this.degrees < 0;
};

module.exports = Latitude;
