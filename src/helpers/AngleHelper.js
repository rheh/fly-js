"use strict";

var AngleHelper = function () {
};

AngleHelper.prototype.degToRad = function (degrees) {
    return degrees * (Math.PI / 180);
}

AngleHelper.prototype.radToDeg = function (radians) {
    return radians * (180 / Math.PI);
}

module.exports = AngleHelper;
