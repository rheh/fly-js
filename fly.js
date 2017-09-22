/**
 * Fly-js utility library - let's fly.....!
 *
 */

var Point = require('./src/Point');
var Latitude = require('./src/Latitude');
var Longitude = require('./src/Longitude');
var DistanceConverter = require('./src/helpers/converters/DistanceConverter');
var SpeedConverter = require('./src/helpers/converters/SpeedConverter');
var HeadAndCrossWindCalculator = require('./src/helpers/math/HeadAndCrossWindCalculator');
var WindTriangleCalculator = require('./src/helpers/math/WindTriangleCalculator');
var beaufortScale = require('./src/helpers/scales/Beaufort');
var windCardinalDirection = require('./src/helpers/scales/WindCardinalDirection');
var wakeLookup = require('./src/helpers/scales/Wake');

var flyjs = function () {
};

/**
* Return the distance between two points
*
* @param  {Number} fromLat
* @param  {Number} fromLon
* @param  {Number} toLat
* @param  {Number} toLon
* @param  {Number} Number decimal places for rouding
* @return {Number} Distance in nautical miles
*/
flyjs.distanceTo = function (fromLat, fromLon, toLat, toLon, roundTo) {

    var from = new Point(new Latitude(fromLat), new Longitude(fromLon));
    var to = new Point(new Latitude(toLat), new Longitude(toLon));

    return from.distanceTo(to, roundTo);
};

/**
* Return the distance between two points
*
* @param  {Number} fromLat
* @param  {Number} fromLon
* @param  {Number} toLat
* @param  {Number} toLon
* @param  {Number} Number decimal places for rouding
* @return {Number} Initial course in degree
*/
flyjs.trueCourse = function (fromLat, fromLon, toLat, toLon, roundTo) {

    var from = new Point(new Latitude(fromLat), new Longitude(fromLon));
    var to = new Point(new Latitude(toLat), new Longitude(toLon));

    return from.trueCourse(to, roundTo);
};

/**
* Return unit of measurement converted from nautical miles value
*
* @param  {Number} unitOfMeasurement to convert to
* @param  {Number} unitValue is the nautical miles value one wishes to convert
* @param  {Number} Number decimal places for rouding
* @return {Number} Unit of measurement converted from nautical miles value
*/
flyjs.nauticalMilesTo = function (unitOfMeasurement, unitValue, roundTo) {
    return DistanceConverter.nauticalMilesTo(unitOfMeasurement, unitValue, roundTo);
};

/**
* Return unit of measurement converted from miles value
*
* @param  {Number} unitOfMeasurement to convert to
* @param  {Number} unitValue is the miles value one wishes to convert
* @param  {Number} Number decimal places for rouding
* @return {Number} Unit of measurement converted from miles value
*/
flyjs.milesTo = function (unitOfMeasurement, unitValue, roundTo) {
    return DistanceConverter.milesTo(unitOfMeasurement, unitValue, roundTo);
};

/**
* Return unit of measurement converted from kilometers value
*
* @param  {Number} unitOfMeasurement to convert to
* @param  {Number} unitValue is the kilometers value one wishes to convert
* @param  {Number} Number decimal places for rouding
* @return {Number} Unit of measurement converted from kilometers value
*/
flyjs.kilometersTo = function (unitOfMeasurement, unitValue, roundTo) {
    return DistanceConverter.kilometersTo(unitOfMeasurement, unitValue, roundTo);
};


/**
* Return unit of measurement converted from knots value
*
* @param  {Number} unitOfMeasurement to convert to
* @param  {Number} unitValue is the knots value one wishes to convert
* @param  {Number} Number decimal places for rouding
* @return {Number} Unit of measurement converted from knots value
*/
flyjs.knotsTo = function (unitOfMeasurement, unitValue, roundTo) {
    return SpeedConverter.knotsTo(unitOfMeasurement, unitValue, roundTo);
};

/**
* Return unit of measurement converted from mps value
*
* @param  {Number} unitOfMeasurement to convert to
* @param  {Number} unitValue is the mps value one wishes to convert
* @param  {Number} Number decimal places for rouding
* @return {Number} Unit of measurement converted from mps value
*/
flyjs.mpsTo = function (unitOfMeasurement, unitValue, roundTo) {
    return SpeedConverter.mpsTo(unitOfMeasurement, unitValue, roundTo);
};


/**
* Return unit of measurement converted from mps value
*
* @param  {Number} unitOfMeasurement to convert to
* @param  {Number} unitValue is the mph value one wishes to convert
* @param  {Number} Number decimal places for rouding
* @return {Number} Unit of measurement converted from knots value
*/
flyjs.mphTo = function (unitOfMeasurement, unitValue, roundTo) {
    return SpeedConverter.mphTo(unitOfMeasurement, unitValue, roundTo);
};

/**
* Calculates the Latitude and Longitude given a true course and distance from a given point
*
* @param  {Number} fromLat
* @param  {Number} fromLon
* @param  {Number} trueCourse course in degrees
* @param  {Number} distance in nautical miles
* @param  {Number} roundTo decimal places for rouding
* @return {Number} Unit of measurement converted from nautical miles value
*/
flyjs.enroute = function (fromLat, fromLon, trueCourse, distance, roundTo) {
    var from = new Point(new Latitude(fromLat), new Longitude(fromLon));
    return from.enroute(trueCourse, distance, roundTo);
};

/**
* Lookup hepler for the Beaufort Scale
*
* @param  {Number} wind value in Knotes
* @param  {String} key Value to retrieve options are All | Force Index | Description
* @return {Number | String | Object} Force Index | Description | or both plus range data
*/
flyjs.beaufortLookup = function (wind, key) {
    return beaufortScale.lookup(wind, key);
};

/**
* Lookup hepler for the Aircraft Wake
*
* @param  {Number} weight in kg
* @return {String} ICAO Wake category
*/
flyjs.wakeLookup = function (weightOfAircraftKg) {
    return wakeLookup.lookup(weightOfAircraftKg);
};

/**
* Head wind calculator
*
* @param  {Number} windSpeed value in Knotes
* @param  {Number} windDirection value in degrees
* @param  {Number} aircraftDirection value in degrees
* @param  {Number} roundTo decimal places for rouding
* @return {Number| Object} Force Index | Description | or both plus range data
*/
flyjs.HeadWindCalculator = function (windSpeed, windDirection, aircraftDirection, roundTo) {
    HeadAndCrossWindCalculator.calculate(windSpeed, windDirection, aircraftDirection, roundTo);
    return HeadAndCrossWindCalculator.getHeadWind();
};

/**
* Cross wind calculator
*
* @param  {Number} windSpeed value in Knotes
* @param  {Number} windDirection value in degrees
* @param  {Number} aircraftDirection value in degrees
* @param  {Number} roundTo decimal places for rouding
* @return {Number| Object} Force Index | Description | or both plus range data
*/
flyjs.CrossWindCalculator = function (windSpeed, windDirection, aircraftDirection, roundTo) {
    HeadAndCrossWindCalculator.calculate(windSpeed, windDirection, aircraftDirection, roundTo);
    return HeadAndCrossWindCalculator.getCrossWind();
};

/**
* Cardinal Wind Directoion (Wind rose)
*
* @param  {Number} windDirection value in degrees
* @return {String} Cardinal Directoion e.g. 330 degrees equals NNW (North North West)
*/
flyjs.CardinalWindDirection = function (windDirection) {
    return windCardinalDirection.lookup(windDirection);
};

/**
* Calculate the interecting point of two great circles
*
* @param  {Number} lat1 Description latitude value
* @param  {Number} lon1 Description longitude value
* @param  {Number} course1 Course in degrees
* @param  {Number} lat2 Description latitude value
* @param  {Number} lon2 Decimal longitude value
* @param  {Number} course2 Course in degrees
* @return {Point} Point at which the two radials intersect
*/
flyjs.intersectionPoint = function (lat1, lon1, course1, lat2, lon2, course2) {
    var point1 = new Point(new Latitude(lat1), new Longitude(lon1), course1);
    var point2 = new Point(new Latitude(lat2), new Longitude(lon2), course2);
    return point1.intersectionPoint(point2);
};

/**
* Wind direction and speed calculation given true air speed, ground speed, course and heading
*
* @param  {Number} trueAirSpeed True airspeed
* @param  {Number} groundSpeed Ground speed
* @param  {Number} heading Heading in degrees
* @param  {Number} course Course in degrees
* @param  {Number} roundTo decimal places for rouding
* @return {WindSpeed and Direction} Wind speed and Direction
*/

flyjs.calculateWindSpeedAndDirection = function (trueAirSpeed, groundSpeed, heading, course, roundTo) {

    WindTriangleCalculator.calculateWindSpeedAndDirection(trueAirSpeed, groundSpeed, heading, course, roundTo);

    return {
        windSpeed: WindTriangleCalculator.getWindSpeed(),
        windDirection: WindTriangleCalculator.getWindDirection()
    };
};

/**
*  Course and Ground Speed calculation given true air speed, ground speed, course and heading
*
* @param  {Number} trueAirSpeed True airspeed
* @param  {Number} heading Heading in degrees
* @param  {Number} windSpeed Wind speed in knots
* @param  {Number} windDirection Wind direction in degrees
* @param  {Number} roundTo Decimal places for rouding
* @return {WindSpeed and Direction} Wind speed and Direction
*/

flyjs.calculateHeadingAndGroundSpeed = function (trueAirSpeed, heading, windSpeed, windDirection, roundTo) {

    WindTriangleCalculator.calculateHeadingAndGroundSpeed(trueAirSpeed, heading, windSpeed, windDirection, roundTo);

    return {
        heading: WindTriangleCalculator.getHeading(),
        groundSpeed: WindTriangleCalculator.getGroundSpeed()
    };
};

/**
*  Course and Ground Speed calculation given true air speed, ground speed, course and heading
*
* @param  {Number} trueAirSpeed True airspeed
* @param  {Number} heading Heading in degrees
* @param  {Number} windSpeed Wind speed in knots
* @param  {Number} windDirection Wind direction in degrees
* @param  {Number} roundTo Decimal places for rouding
* @return {WindSpeed and Direction} Wind speed and Direction
*/

flyjs.calculateCourseAndGroundSpeed = function (trueAirSpeed, heading, windSpeed, windDirection, roundTo) {

    WindTriangleCalculator.calculateCourseAndGroundSpeed(trueAirSpeed, heading, windSpeed, windDirection, roundTo);

    return {
        course: WindTriangleCalculator.getCourse(),
        groundSpeed: WindTriangleCalculator.getGroundSpeed()
    };
};

module.exports = flyjs;
