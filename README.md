# fly-js v0.0.2
A JavaScript utility library focusing on aviation.

<img src='https://travis-ci.org/rheh/fly-js.svg?branch=master'>

## Usage in nodejs

var fly = require('fly');

## Examples

fly.distanceTo(58.2, 0, 53.3, -1.2, 2);

Returns the distance between the two pairs of decimal latitude and longitude values in nautical miles to two decimal places (last parameter).

fly.trueCourse(53.0, 0, -9.3, 53, 2);

Returns the initial course between the two pairs of decimal latitude and longitude values in degrees to two decimal places (last parameter).
