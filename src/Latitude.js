"use strict";

var AngleHelper = require('../src/helpers/AngleHelper')

var validate = function (degrees) {
    return degrees >= -90.00 && degrees <= 90.00;
};

var Latitude = function (degrees) {

    if (!validate(degrees)) {
        throw new Error("Invalid Latitude value");
    }

    var angle = new AngleHelper();
    this.degrees = degrees;
    this.radians = angle.degToRad(degrees);
}

Latitude.prototype.getDegrees = function () {
    return this.degrees;
};

Latitude.prototype.getRadians = function () {
    return this.radians;
};

Latitude.prototype.isNorth = function () {
    return this.degrees > 0;
}

Latitude.prototype.isEqualtor = function () {
    return this.degrees === 0;
}

Latitude.prototype.isSouth = function () {
    return this.degrees < 0;
}

module.exports = Latitude;
