'use strict';

var test = require('tape');

var E = require('../');
var R = require('../range');
var S = require('../syntax');
var T = require('../type');

test('errors', function (t) {
	t.equal(E, Error);
	t.equal(R, RangeError);
	t.equal(S, SyntaxError);
	t.equal(T, TypeError);

	t.end();
});
