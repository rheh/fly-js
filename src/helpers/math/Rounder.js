/*jslint node: true */
"use strict";

var Rounder = function () {
};

Rounder.prototype.round = function (value, roundTo) {
    if (value) {
        return Math.round(value * Math.pow(10, roundTo)) / Math.pow(10, roundTo);
    }

    return value;
};

module.exports = new Rounder();
