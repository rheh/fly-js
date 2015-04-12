/*jslint node: true */
"use strict";

var Rounder = require("../../../src/helpers/math/Rounder");

var DistanceConvertor = function () {
};

DistanceConvertor.prototype.convertMultipler = function(value, factor, roundTo) {

    var places = 15;

    if (roundTo) {
        places = roundTo; 
    }

    return Rounder.round(value * factor, places);
};

DistanceConvertor.prototype.nauticalMilesTo = function (unitOfMeasurement, unitValue, roundTo) {

    var converterFunc = 'nauticalMilesTo' + unitOfMeasurement;

    if (typeof this[converterFunc] !== "function") { 
        throw new Error('Unknown conversion');
    }

    return this[converterFunc](unitValue, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToRadians = function (nauticalMiles, roundTo) {
    return Rounder.round(nauticalMiles * Math.PI / (180 * 60), 2);
};

DistanceConvertor.prototype.nauticalMilesToMiles = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 1.15078, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToKilometres = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 1.85200, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToFeet = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 6076.12, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToMetres = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 1852, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToCentimetres = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 185200, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToInches = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 72913.4, roundTo);
};

module.exports = new DistanceConvertor();
