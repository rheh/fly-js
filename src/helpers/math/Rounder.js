/*jslint node: true */
"use strict";

var Rounder = function () {
};

Rounder.prototype.round = function (value, roundTo) {
    return Math.round(value * Math.pow(10, roundTo)) / Math.pow(10, roundTo);
};

module.exports = new Rounder();
