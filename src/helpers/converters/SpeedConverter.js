/*jslint node: true */
"use strict";

var Rounder = require("../../../src/helpers/math/Rounder");

var SpeedConverter = function () {
};

SpeedConverter.prototype.convertMultipler = function(value, factor, roundTo) {

    var places = 15;

    if (roundTo) {
        places = roundTo; 
    }

    return Rounder.round(value * factor, places);
};

SpeedConverter.prototype.knotsTo = function (unitOfMeasurement, unitValue, roundTo) {

    var converterFunc = 'knotsTo' + unitOfMeasurement;

    if (typeof this[converterFunc] !== "function") { 
        throw new Error('Unknown conversion' + converterFunc);
    }

    return this[converterFunc](unitValue, roundTo);
};

SpeedConverter.prototype.knotsToMilesPerHour = function (knots, roundTo) {
    return this.convertMultipler(knots, 1.15078, roundTo);
};

SpeedConverter.prototype.knotsToKilometersPerHour = function (knots, roundTo) {
    return this.convertMultipler(knots, 1.852, roundTo);
};

SpeedConverter.prototype.knotsToMetersPerSecond = function (knots, roundTo) {
    return this.convertMultipler(knots, 0.514444444, roundTo);
};

SpeedConverter.prototype.mphTo = function (unitOfMeasurement, unitValue, roundTo) {

    var converterFunc = 'mphTo' + unitOfMeasurement;

    if (typeof this[converterFunc] !== "function") { 
        throw new Error('Unknown conversion');
    }

    return this[converterFunc](unitValue, roundTo);
};

SpeedConverter.prototype.mphToKnots = function (mph, roundTo) {
    return this.convertMultipler(mph, 0.868976, roundTo);
};

SpeedConverter.prototype.mphToKilometersPerHour = function (mph, roundTo) {
    return this.convertMultipler(mph, 1.60934, roundTo);
};

SpeedConverter.prototype.mphToMetersPerSecond = function (mph, roundTo) {
    return this.convertMultipler(mph, 0.44704, roundTo);
};

SpeedConverter.prototype.mpsTo = function (unitOfMeasurement, unitValue, roundTo) {

    var converterFunc = 'mpsTo' + unitOfMeasurement;

    if (typeof this[converterFunc] !== "function") { 
        throw new Error('Unknown conversion');
    }

    return this[converterFunc](unitValue, roundTo);
};

SpeedConverter.prototype.mpsToKnots = function (metersPerSecond, roundTo) {
    return this.convertMultipler(metersPerSecond, 1.9438444924574, roundTo);
};

SpeedConverter.prototype.mpsToKilometersPerHour = function (metersPerSecond, roundTo) {
    return this.convertMultipler(metersPerSecond, 3.6, roundTo);
};

SpeedConverter.prototype.mpsToMilesPerHour = function (metersPerSecond, roundTo) {
    return this.convertMultipler(metersPerSecond, 2.23693629, roundTo);
};

module.exports = new SpeedConverter();
