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
        throw new Error('Unknown conversion' + converterFunc);
    }

    return this[converterFunc](unitValue, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToRadians = function (nauticalMiles, roundTo) {
    return Rounder.round(nauticalMiles * Math.PI / (180 * 60), 2);
};

DistanceConvertor.prototype.nauticalMilesToMiles = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 1.15078, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToKilometers = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 1.85200, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToFeet = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 6076.12, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToMeters = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 1852, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToCentimeters = function (nauticalMiles, roundTo) {
    return this.convertMultipler(nauticalMiles, 185200, roundTo);
};

DistanceConvertor.prototype.nauticalMilesToInches = function (miles, roundTo) {
    return this.convertMultipler(miles, 72913.4, roundTo);
};

DistanceConvertor.prototype.milesTo = function (unitOfMeasurement, unitValue, roundTo) {

    var converterFunc = 'milesTo' + unitOfMeasurement;

    if (typeof this[converterFunc] !== "function") { 
        throw new Error('Unknown conversion');
    }

    return this[converterFunc](unitValue, roundTo);
};

DistanceConvertor.prototype.milesToNauticalMiles = function (miles, roundTo) {
    return this.convertMultipler(miles, 0.868976, roundTo);
};

DistanceConvertor.prototype.milesToKilometers = function (miles, roundTo) {
    return this.convertMultipler(miles, 1.609344, roundTo);
};

DistanceConvertor.prototype.milesToFeet = function (miles, roundTo) {
    return this.convertMultipler(miles, 5280, roundTo);
};

DistanceConvertor.prototype.milesToMeters = function (miles, roundTo) {
    return this.convertMultipler(miles, 1609.344, roundTo);
};

DistanceConvertor.prototype.milesToCentimeters = function (miles, roundTo) {
    return this.convertMultipler(miles, 160934.4, roundTo);
};

DistanceConvertor.prototype.milesToInches = function (miles, roundTo) {
    return this.convertMultipler(miles, 63360, roundTo);
};

DistanceConvertor.prototype.kilometersTo = function (unitOfMeasurement, unitValue, roundTo) {

    var converterFunc = 'kilometersTo' + unitOfMeasurement;

    if (typeof this[converterFunc] !== "function") { 
        throw new Error('Unknown conversion');
    }

    return this[converterFunc](unitValue, roundTo);
};

DistanceConvertor.prototype.kilometersToNauticalMiles = function (kilometers, roundTo) {
    return this.convertMultipler(kilometers, 0.539956803, roundTo);
};

DistanceConvertor.prototype.kilometersToMiles = function (kilometers, roundTo) {
    return this.convertMultipler(kilometers, 0.621371192, roundTo);
};

DistanceConvertor.prototype.kilometersToFeet = function (kilometers, roundTo) {
    return this.convertMultipler(kilometers, 3280.8399, roundTo);
};

DistanceConvertor.prototype.kilometersToMeters = function (kilometers, roundTo) {
    return this.convertMultipler(kilometers, 1000, roundTo);
};

DistanceConvertor.prototype.kilometersToCentimeters = function (kilometers, roundTo) {
    return this.convertMultipler(kilometers, 100000, roundTo);
};

DistanceConvertor.prototype.kilometersToInches = function (kilometers, roundTo) {
    return this.convertMultipler(kilometers, 39370.0787, roundTo);
};

module.exports = new DistanceConvertor();
