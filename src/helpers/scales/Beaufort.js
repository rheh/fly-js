/*jslint node: true */
"use strict";

var Beaufort = function () {

    this.scale = [
        {
            "force": 0,
            "description": "Calm",
            "windspeed": {
                "lower": 0,
                "upper": 0
            }
        },
        {
            "force": 1,
            "description": "Light Air",
            "windspeed": {
                "lower": 1,
                "upper": 3
            }
        },
        {
            "force": 2,
            "description": "Light Breeze",
            "windspeed": {
                "lower": 4,
                "upper": 6
            }
        },
        {
            "force": 3,
            "description": "Gentle Breeze",
            "windspeed": {
                "lower": 7,
                "upper": 10
            }
        },
        {
            "force": 4,
            "description": "Moderate Breeze",
            "windspeed": {
                "lower": 11,
                "upper": 16
            }
        },
        {
            "force": 5,
            "description": "Fresh Breeze",
            "windspeed": {
                "lower": 17,
                "upper": 21
            }
        },
        {
            "force": 6,
            "description": "Strong Breeze",
            "windspeed": {
                "lower": 22,
                "upper": 27
            }
        },
        {
            "force": 7,
            "description": "Near Gale",
            "windspeed": {
                "lower": 28,
                "upper": 33
            }
        },
        {
            "force": 8,
            "description": "Fresh Gale",
            "windspeed": {
                "lower": 34,
                "upper": 40
            }
        },
        {
            "force": 9,
            "description": "Strong Gale",
            "windspeed": {
                "lower": 41,
                "upper": 47
            }
        },
        {
            "force": 10,
            "description": "Storm",
            "windspeed": {
                "lower": 48,
                "upper": 55
            }
        },
        {
            "force": 11,
            "description": "Violent Storm",
            "windspeed": {
                "lower": 56,
                "upper": 63
            }
        },
        {
            "force": 12,
            "description": "Hurricane",
            "windspeed": {
                "lower": 64,
                "upper": Infinity
            }
        }
    ];

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

    Object.keys(self.scale).forEach(function (key) {

        var item = self.scale[key];

        if (self.between(item, windKnotes)) {
            match = item[key] || item;
        }

    });


    return match;
};

module.exports = new Beaufort();
