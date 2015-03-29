/*jslint node: true */
"use strict";

function round (value, places) {
    return Math.round(value * Math.pow(10, places)) / Math.pow(10, places);
}

var AngleHelper = function () {
};

AngleHelper.prototype.degToRad = function (degrees, roundTo) {

    var places = 15;

    if (roundTo) {
        places = roundTo;
    }

    return round(degrees * (Math.PI / 180), places);
};

AngleHelper.prototype.radToDeg = function (radians, roundTo) {

    var places = 15;

    if (roundTo) {
        places = roundTo; 
    }

    return round(radians * (180 / Math.PI), places);
};

module.exports = new AngleHelper();
