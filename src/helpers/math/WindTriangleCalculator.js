/*jslint node: true */
"use strict";

var AngleConverter = require('../converters/AngleConverter');
var Rounder = require('./Rounder');

var WindTriangleCalculator = function () {
    this.clearCalculatedValues();
};

WindTriangleCalculator.prototype.clearCalculatedValues = function () { 
    this.windSpeed = null;
    this.windDirection = null;
    this.heading = null;
    this.groundSpeed = null;
    this.course = null;
};

WindTriangleCalculator.prototype.calculateWindSpeedAndDirection = function (trueAirSpeed, groundSpeed, heading, course, roundTo) {

    this.clearCalculatedValues();

    var places = 15;

    if (roundTo) {
        places = roundTo;
    }

    var angleDifference = AngleConverter.degToRad(heading - course);
    var courseInRadians = AngleConverter.degToRad(course);
    var speedDifference = trueAirSpeed - groundSpeed;

    var windSpeed = Math.sqrt(Math.pow(speedDifference, 2) + 4 * trueAirSpeed * groundSpeed * Math.pow((Math.sin(angleDifference / 2)), 2));
    var windDirection = courseInRadians + Math.atan2(trueAirSpeed * Math.sin(angleDifference), trueAirSpeed * Math.cos(angleDifference) - groundSpeed);

    if (windDirection < 0) {
        windDirection = windDirection + 2 * Math.PI;
    } else if (windDirection > 2 * Math.PI) {
        windDirection = windDirection - 2 * Math.PI;
    }

    this.windSpeed = Rounder.round(windSpeed, places);
    this.windDirection = Rounder.round(AngleConverter.radToDeg(windDirection), places);
};

WindTriangleCalculator.prototype.calculateHeadingAndGroundSpeed = function (trueAirSpeed, course, windSpeed, windDirection, roundTo) {

    this.clearCalculatedValues();

    var places = 15;

    if (roundTo) {
        places = roundTo;
    }

    var courseInRadians = AngleConverter.degToRad(course);
    var angleDifference = AngleConverter.degToRad(windDirection - course);
    var SWC = (windSpeed / trueAirSpeed) * Math.sin(angleDifference);
    var heading;
    var groundSpeed;

    if (Math.abs(SWC) > 1) {
      throw new Error("Course cannot be flown - wind too strong");
    } else {

        heading = courseInRadians + Math.asin(SWC);

        if (heading < 0) {
            heading = heading + 2 * Math.PI;
        } else if (heading > 2 * Math.PI) {
            heading = heading - 2 * Math.PI;
        }

        groundSpeed = trueAirSpeed * Math.sqrt(1 - Math.pow(SWC, 2)) - windSpeed * Math.cos(angleDifference);

        if (groundSpeed < 0) {
            throw new Error("course cannot be flown - wind too strong");
        }
    }

    this.heading = Rounder.round(AngleConverter.radToDeg(heading), places);
    this.groundSpeed = Rounder.round(groundSpeed, places);
};

WindTriangleCalculator.prototype.calculateCourseAndGroundSpeed = function (trueAirSpeed, heading, windSpeed, windDirection, roundTo) {

    this.clearCalculatedValues();

    var places = 15;

    if (roundTo) {
        places = roundTo;
    }

    var headingInRadians = AngleConverter.degToRad(heading);
    var angleDifference = AngleConverter.degToRad(heading - windDirection);

    var groundSpeed = Math.sqrt(Math.pow(windSpeed, 2) + Math.pow(trueAirSpeed, 2) - 2 * windSpeed * trueAirSpeed * Math.cos(angleDifference));
    var WCA = Math.atan2(windSpeed * Math.sin(angleDifference), trueAirSpeed - windSpeed * Math.cos(angleDifference));
    var course = (headingInRadians + WCA) % (2 * Math.PI);

    this.course = Rounder.round(AngleConverter.radToDeg(course), places);
    this.groundSpeed = Rounder.round(groundSpeed, places);
};

WindTriangleCalculator.prototype.getCourse = function () {
    return this.course;
};

WindTriangleCalculator.prototype.getHeading = function () {
    return this.heading;
};

WindTriangleCalculator.prototype.getGroundSpeed = function () {
    return this.groundSpeed;
};

WindTriangleCalculator.prototype.getWindSpeed = function () {
    return this.windSpeed;
};

WindTriangleCalculator.prototype.getWindDirection = function () {
    return this.windDirection;
};

module.exports = new WindTriangleCalculator();
