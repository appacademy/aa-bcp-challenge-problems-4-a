const assert = require('assert');

const objectToString = require('../problems/1-object-to-string.js');
const shortestWord = require('../problems/2-shortest-word.js');
const greatestCommonFactor = require('../problems/3-greatest-common-factor.js');
const valueConcat = require('../problems/4-value-concat.js');
const hipsterfyWord = require('../problems/5-hipsterfy-word.js');

describe('objectToString()', function () {
  it('should return a string representing the count of each character in the object', function () {
    const actual1 = objectToString({ a: 2, b: 4, c: 1 });
    const expected1 = 'aabbbbc';
    assert.deepEqual(actual1.split('').sort(), expected1.split('').sort());

    const actual2 = objectToString({ b: 1, o: 2, t: 1 });
    const expected2 = 'boot';
    assert.deepEqual(actual2.split('').sort(), expected2.split('').sort());
  });
});

describe('shortestWord()', function () {
  it('should return the shortest word of the sentence', function () {
    assert.equal(shortestWord('app academy is cool'), 'is');
    assert.equal(shortestWord('bootcamp prep'), 'prep');
  });
});

describe('greatestCommonfactor()', function () {
  it('should return the greatest common factor of `num1` and `num2`', function () {
    assert.equal(greatestCommonFactor(15, 25), 5);
    assert.equal(greatestCommonFactor(16, 24), 8);
    assert.equal(greatestCommonFactor(7, 11), 1);
  });
});

describe('valueConcat()', function () {
  it('should return a new array where elements of the original array are concatenated with their corresponding values in the object', function () {
    const actual1 = valueConcat(['alex', 'maurice', 'meagan', 'ali'], {
      alex: 'bronca',
      ali: 'harris',
    });
    const expected1 = ['alexbronca', 'maurice', 'meagan', 'aliharris'];
    assert.deepEqual(actual1, expected1);

    const actual2 = valueConcat(['a', 'b', 'c'], { b: 2, c: 3 });
    const expected2 = ['a', 'b2', 'c3'];
    assert.deepEqual(actual2, expected2);
  });
});

describe('hipsterfyWord()', function () {
  it('should return the string with the last vowel removed', function () {
    assert.equal(hipsterfyWord('proper'), 'propr');
    assert.equal(hipsterfyWord('tonic'), 'tonc');
    assert.equal(hipsterfyWord('PANTHER'), 'PANTHR');
    assert.equal(hipsterfyWord('BACKWARDS'), 'BACKWRDS');
  });
});
