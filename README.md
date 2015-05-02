## fly-js v0.0.3
A JavaScript utility library focusing on aviation.

<img src='https://travis-ci.org/rheh/fly-js.svg?branch=master'>

## Tests

Test can be run eith by:

    npm test

    ; or

    mocha test


## Continuous Integration
Via Github's Travis.  Runs tests (mocha) and linter (jshint)
<img src='https://travis-ci.org/rheh/fly-js.svg?branch=master'>

## API Reference

# Navigation functions

```javascript
fly.distanceTo(58.2, 0, 53.3, -1.2, 2);
```
Returns the distance between the two pairs of decimal latitude and longitude values in nautical miles to two decimal places (last parameter).

```javascript
fly.trueCourse(53.0, 0, -9.3, 53, 2);
```
Returns the initial course between the two pairs of decimal latitude and longitude values in degrees to two decimal places (last parameter).

```javascript
fly.enroute(34.6169641, 118.400009, 66, 100, 2);
```
Returns a new position given true course and distance from a given point

```javascript
fly.intersectionPoint(53.583378, -0.34851, 180, 51.150837, -0.177416, 15);
```
Returns the position the two great circles intersect; using the pair of latitude, longitude and course values as radials

# Convertors

## Nautical miles

```javascript
fly.nauticalMilesTo('Kilometres', 100000, 5);
```
Returns the 10000 nautical miles converted to Kilometres rounded to five decimal places.

```javascript
fly.nauticalMilesTo('Miles', 100000, 5);
```
Returns the 10000 nautical miles converted to Miles rounded to five decimal places.

```javascript
fly.nauticalMilesTo('Feet', 100000, 5);
```
Returns the 10000 nautical miles converted to Feet rounded to five decimal places.

```javascript
fly.nauticalMilesTo('Meters', 100000, 5);
```
Returns the 10000 nautical miles converted to Meters rounded to five decimal places.

```javascript
fly.nauticalMilesTo('Inches', 100000, 5);
```
Returns the 10000 nautical miles converted to Inches rounded to five decimal places.

```javascript
fly.nauticalMilesTo('Centimeters', 100000, 5);
```
Returns the 10000 nautical miles converted to Centimeters rounded to five decimal places.

## Miles

```javascript
fly.milesTo('Kilometres', 100000, 5);
```
Returns the 10000 miles converted to Kilometres rounded to five decimal places.

```javascript
fly.milesTo('Nautical Miles', 100000, 5);
```
Returns the 10000 miles converted to Miles rounded to five decimal places.

```javascript
fly.milesTo('Feet', 100000, 5);
```
Returns the 10000 miles converted to Feet rounded to five decimal places.

```javascript
fly.milesTo('Meters', 100000, 5);
```
Returns the 10000 miles converted to Meters rounded to five decimal places.

```javascript
fly.milesTo('Inches', 100000, 5);
```
Returns the 10000 miles converted to Inches rounded to five decimal places.

```javascript
fly.milesTo('Centimeters', 100000, 5);
```
Returns the 10000 miles converted to Centimeters rounded to five decimal places.

## Kilometres 

```javascript
fly.kilometresTo('Miles', 100000, 5);
```
Returns the 10000 kilometres converted to Miles rounded to five decimal places.

```javascript
fly.kilometresTo('Nautical Miles', 100000, 5);
```
Returns the 10000 kilometres converted to Nautical Miles rounded to five decimal places.

```javascript
fly.kilometresTo('Feet', 100000, 5);
```
Returns the 10000 kilometres converted to Feet rounded to five decimal places.

```javascript
fly.kilometresTo('Meters', 100000, 5);
```
Returns the 10000 kilometres converted to Meters rounded to five decimal places.

```javascript
fly.kilometresTo('Inches', 100000, 5);
```
Returns the 10000 kilometres converted to Inches rounded to five decimal places.

```javascript
fly.kilometresTo('Centimeters', 100000, 5);
```
Returns the 10000 kilometres converted to Centimeters rounded to five decimal places.



```javascript
fly.mpsTo('Knots', 233, 2);
```
Returns the 233 miles per hour converted to Knots rounded to two decimal places.

```javascript
fly.mpsTo('KilometersPerHour', 233);
```
Returns the 233 miles per hour converted to km/h.

# Lookups

## Beaufort

```javascript
fly.beaufortLookup(45);
```
Returns beaufort description of a 45 knot wind e.g. 'Strong Gale'

```javascript
fly.beaufortLookup(25);
```
Returns beaufort force index of a 25 knot wind e.g. 6

```javascript
fly.beaufortLookup(15, 'all');
```
Returns beaufort force, description and range of a 15

## Wind Cardinal Direction

```javascript
flyjs.CardinalWindDirection(180);
```
Returns "S" (South) the cardinal direction for a wind at 180 degrees

# Calculators

```javascript
fly.HeadWindCalculator(25, 180, 215, 2);
```

Returns head wind component, given wind speed (knots), wind direction and aircraft direction (later pair both measured in degrees). Rounded to 2 decimal places.

```javascript
fly.CrossWindCalculator(25, 180, 215, 2);
```

Returns cross wind component, given wind speed (knots), wind direction and aircraft direction (later pair both measured in degrees). Rounded to 2 decimal places.

# Wind Triangle

```javascript
flyjs.calculateCourseAndGroundSpeed(120, 80, 43, 133, 2);
```

Returns course and ground speed, given trueAirSpeed, heading, windSpeed and windDirection, rounded to 2 decimal places.

```javascript
flyjs.calculateHeadingAndGroundSpeed(120, 60, 43, 133, 2);
```

Returns heading and ground speed, given trueAirSpeed, course, windSpeed and windDirection, rounded to 2 decimal places.

```javascript
flyjs.calculateWindSpeedAndDirection(trueAirSpeed, groundSpeed, course, heading, 2);
```

Returns wind speed and direction, given trueAirSpeed, groundSpeed, course and heading, rounded to 2 decimal places.

## Contributors

One-man-band at the moment.  Contact me at twitter on @rayhammond, or, via my blog here http://geeksretreat.wordpress.com if you are interest in getting involved.

## License

MIT
