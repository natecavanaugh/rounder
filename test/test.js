'use strict';
var assert = require('assert');
var rounder = require('../');

it(
	'should round to a specific precision',
	function() {
		assert.strictEqual(rounder(1.23, 1), 1.2);
		assert.strictEqual(rounder(1.25, 1), 1.3);
		assert.strictEqual(rounder(1.25, 3), 1.25);
		assert.strictEqual(rounder(1.2545232, 3), 1.255);
	}
);