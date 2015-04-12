/*jslint node: true */
"use strict";

var AngleConverter = require('../converters/AngleConverter');
var Rounder = require('./Rounder');

var HeadAndCrossWindCalculator = function  () {
    this.headWind = null;
    this.crossWind = null;
};

HeadAndCrossWindCalculator.prototype.calculate = function (windSpeed, windDirection, aircraftDirection, roundTo) {

    var places = 15;

    if (roundTo) {
        places = roundTo;
    }

    var theta = AngleConverter.degToRad(windDirection - aircraftDirection);

    this.crossWind = Rounder.round(windSpeed * Math.sin(theta), places);
    this.headWind = Rounder.round(windSpeed * Math.cos(theta), places);
};

HeadAndCrossWindCalculator.prototype.getHeadWind = function () {
    return this.headWind;
};

HeadAndCrossWindCalculator.prototype.getCrossWind = function () {
    return this.crossWind;
};

module.exports = new HeadAndCrossWindCalculator();
