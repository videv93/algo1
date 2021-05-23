var assert = require('assert');
var myPow = require('../Pow');

describe('MaxDepth', function() {
    it('should return 2 for input (2,1)', function() {
        assert.strictEqual(myPow(2, 1), 2);
    })
    it('should return 0.25 for input (2,-2)', function() {
        assert.strictEqual(myPow(2, -2), 0.25);
    })
})