var assert = require('assert');
var climbingStairs = require('../ClimbingStairs');

describe('ClimbingStairs', function() {
    it('should return 1 for input 1', function() {
        assert.strictEqual(climbingStairs(1), 1);
    })
    it('should return 2 for input 2', function() {
        assert.strictEqual(climbingStairs(2), 2);
    })
    it('should return 3 for input 3', function() {
        assert.strictEqual(climbingStairs(3), 3);
    })
    it('should return 1836311903 for input 45', function() {
        assert.strictEqual(climbingStairs(45), 1836311903);
    })
})