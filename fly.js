/**
 * Fly-js utility library - let's fly.....!
 *
 */

var Point = require('./src/Point');
var Latitude = require('./src/Latitude');
var Longitude = require('./src/Longitude');
var DistanceConverter = require('./src/helpers/converters/DistanceConverter');

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
* Calculates the Latitude and Longitude given a true course and distance from a given point
*
* @param  {Number} fromLat
* @param  {Number} fromLon
* @param  {Number} True course in degrees
* @param  {Number} Distance in nautical miles
* @param  {Number} Number decimal places for rouding
* @return {Number} Unit of measurement converted from nautical miles value
*/
flyjs.enroute = function (fromLat, fromLon, trueCourse, distance, roundTo) {
    var from = new Point(new Latitude(fromLat), new Longitude(fromLon));
    return from.enroute(trueCourse, distance, roundTo);
};


module.exports = flyjs;
