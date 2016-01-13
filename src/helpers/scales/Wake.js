/*jslint node: true */
"use strict";

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

    var self = this;

    Object.keys(self.categories).forEach(function (categoryKey) {

        var item = self.categories[categoryKey];

        if (self.between(item, aircraftWeightKg)) {
            match = item.code;
        }

    });

    return match;
};

module.exports = new Wake();
