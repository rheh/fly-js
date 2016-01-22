/*jslint node: true */
"use strict";

var beaufortScale = require('./BeaufortScale.json');

var Beaufort = function () {
    this.scale =  beaufortScale;
};

Beaufort.prototype.between = function (item, windKnotes) {
    return windKnotes >= item.windspeed.lower && windKnotes <= item.windspeed.upper;
};

Beaufort.prototype.lookup = function (windKnotes, key) {

    var match = null;

    if (!key) {
        key = "description";
    }

    var self = this;

    Object.keys(self.scale).forEach(function (scaleKey) {

        var item = self.scale[scaleKey];

        if (self.between(item, windKnotes)) {
            match = item[key] || item;
        }

    });


    return match;
};

module.exports = new Beaufort();
