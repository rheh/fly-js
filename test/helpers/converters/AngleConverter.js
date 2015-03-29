var chai = require('chai');

var should = chai.should(),
    assert = chai.assert,
    expect = chai.expect;

var AngleConverter = require('../../../src/helpers/converters/AngleConverter');

describe('#Angle helper object works', function () {

    describe('Conversions', function () {

        it('Converts degrees to radians', function () {

            var degrees = 90;
            var expected_result = 1.57079633;

            AngleConverter.degToRad(degrees, 8).should.equal(expected_result);
        });

        it('Converts radians to degrees', function () {

            var radians = 1.66661;
            var expected_result = 95.4897191;

            AngleConverter.radToDeg(radians, 7).should.equal(expected_result);
        });

    });
});
