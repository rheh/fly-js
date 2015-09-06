/*jslint node: true */
"use strict";

var _ = require('lodash');

var Wake = function () {

    this.categories = [
        {
            code: 'H',
            kg: {
              lower: 136000,
              upper: Infinity
            }
        },
        {
            code: 'M',
            kg: {
              lower: 7000,
              upper: 136000
            }
        },
        {
            code: 'L',
            kg: {
              lower: 0,
              upper: 7000
            }
        },

    ];

};

Wake.prototype.between = function (item, aircraftWeightKg) {
    return aircraftWeightKg >= item.kg.lower && aircraftWeightKg < item.kg.upper;
};

Wake.prototype.lookup = function (aircraftWeightKg) {

    var match = null;

    if (aircraftWeightKg < 0) {
        throw('Negative weight not permitted');
    }

    _.forOwn(this.categories, function (item) {

        if (this.between(item, aircraftWeightKg)) {
            match = item.code;
        }

    }, this);

    return match;
};

module.exports = new Wake();
