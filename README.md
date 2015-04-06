## Synopsis - fly-js v0.0.2
A JavaScript utility library focusing on aviation.

<img src='https://travis-ci.org/rheh/fly-js.svg?branch=master'>

## Tests

Test can be run eith by:

    npm test

    ; or

    mocha test


## Continoues Integration
Via Github's Travis.  Runs tests and linter (jshint)
<img src='https://travis-ci.org/rheh/fly-js.svg?branch=master'>

## API Reference

# Navigation

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

# Convertors

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

# Convertors

Simple lookups

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

## Contributors

One-man-band at the moment.  Contact me at twitter on @rayhammond, or, via my blog here http://geeksretreat.wordpress.com if you are interest in getting involved.

## License

MIT
