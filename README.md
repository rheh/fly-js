# fly-js v0.0.2
A JavaScript utility library focusing on aviation.

## Usage in nodejs

var fly = require('fly');

## Navigation

fly.distanceTo(58.2, 0, 53.3, -1.2, 2);

Returns the distance between the two pairs of decimal latitude and longitude values in nautical miles to two decimal places (last parameter).

fly.trueCourse(53.0, 0, -9.3, 53, 2);

Returns the initial course between the two pairs of decimal latitude and longitude values in degrees to two decimal places (last parameter).

## Convertors

fly.nauticalMilesTo('Kilometres', 100000, 5);

Returns the 10000 nautical miles converted to Kilometres rounded to five decimal places.

fly.nauticalMilesTo('Miles', 100000, 5);

Returns the 10000 nautical miles converted to Miles rounded to five decimal places.

fly.nauticalMilesTo('Feet', 100000, 5);

Returns the 10000 nautical miles converted to Feet rounded to five decimal places.

fly.nauticalMilesTo('Meters', 100000, 5);

Returns the 10000 nautical miles converted to Meters rounded to five decimal places.

fly.nauticalMilesTo('Inches', 100000, 5);

Returns the 10000 nautical miles converted to Inches rounded to five decimal places.
fly.nauticalMilesTo('Centimeters', 100000, 5);
