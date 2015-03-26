/**
 * Fly-js utility library - let's fly.....!
 *
 */

var Point = require('./src/Point')
var Latitude = require('./src/Latitude')
var Longitude = require('./src/Longitude')

var flyjs = function () {
};

/**
* Return the distance between two points
*
* @param  {Number} fromLat
* @param  {Number} fromLon
* @param  {Number} toLat
* @param  {Number} toLon
* @return {Number} Distance in nautical miles
*/
flyjs.distanceTo = function (fromLat, fromLon, toLat, toLon, roundTo) {

    var from = new Point(new Latitude(fromLat), new Longitude(fromLon));
    var to = new Point(new Latitude(toLat), new Longitude(toLon));

    return from.distanceTo(to, roundTo);
}

/**
* Return the distance between two points
*
* @param  {Number} fromLat
* @param  {Number} fromLon
* @param  {Number} toLat
* @param  {Number} toLon
* @return {Number} Initial course in degree
*/
flyjs.trueCourse = function (fromLat, fromLon, toLat, toLon, roundTo) {

    var from = new Point(new Latitude(fromLat), new Longitude(fromLon));
    var to = new Point(new Latitude(toLat), new Longitude(toLon));

    return from.trueCourse(to, roundTo);
}

module.exports = flyjs;
