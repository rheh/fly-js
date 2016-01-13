/*jslint node: true */
"use strict";

var windCardinalDirectionScale = require('./WindCardinalDirectionScale.json');

var WindCardinalDirection = function () {

    this.scale = windCardinalDirectionScale;

};

WindCardinalDirection.prototype.between = function (item, windDirection) {
    return windDirection >= item.lower && windDirection <= item.upper;
};

WindCardinalDirection.prototype.lookup = function (windDirection) {

    var match = null;

    var self = this;

    Object.keys(self.scale).forEach(function (scaleKey) {

        var item = self.scale[scaleKey];

        Object.keys(item.ranges).forEach(function (rangesKey) {

            var range = item.ranges[rangesKey];

            if (self.between(range, windDirection)) {
                match = item.cardinalDirection;
            }

        });

    });

    return match;
};

module.exports = new WindCardinalDirection();
