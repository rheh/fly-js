"use strict";

var validate = function (degrees) {
    return degrees >= -90.00 && degrees <= 90.00;
};

var Latitude = function (degrees) {

    if (!validate(degrees)) {
        throw new Error("Invalid Latitude value");
    }

    this.degrees = degrees;
}

Latitude.prototype.getDegrees = function () {
    return this.degrees;
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
