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
var beaufortScale = require('./src/helpers/scales/Beaufort');
var windCardinalDirection = require('./src/helpers/scales/WindCardinalDirection');

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
* Return unit of measurement converted from kilometres value
*
* @param  {Number} unitOfMeasurement to convert to
* @param  {Number} unitValue is the kilometres value one wishes to convert
* @param  {Number} Number decimal places for rouding
* @return {Number} Unit of measurement converted from kilometres value
*/
flyjs.kilometresTo = function (unitOfMeasurement, unitValue, roundTo) {
    return DistanceConverter.kilometresTo(unitOfMeasurement, unitValue, roundTo);
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

module.exports = flyjs;
