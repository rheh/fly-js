"use strict";

var AngleHelper = require('../src/helpers/AngleHelper')

var validate = function (degrees) {
    return degrees >= -180.00 && degrees <= 180.00;
};

var Longitude = function (degrees) {

    if (!validate(degrees)) {
        throw new Error("Invalid Longitude value");
    }

    var angle = new AngleHelper();

    this.degrees = degrees;
    this.radians = angle.degToRad(degrees);
}

Longitude.prototype.getDegrees = function () {
    return this.degrees;
};

Longitude.prototype.getRadians = function () {
    return this.radians;
};

Longitude.prototype.isWest = function () {
    return this.degrees < 0;
}

Longitude.prototype.isMeridian = function () {
    return this.degrees === 0;
}

Longitude.prototype.isEast = function () {
    return this.degrees > 0;
}

module.exports = Longitude;
