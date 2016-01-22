/*jslint node: true */
"use strict";

var wakeCategories = require('./WakeCategories.json');

var Wake = function () {

    this.categories = wakeCategories;

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
