var assert = require('assert');
var fib = require('../FibonacciNumber');

describe('FibonacciNumber', function() {
    it('should return 0 for input 0', function() {
        assert.equal(fib(0), 0);
    });
    it('should return 1 for input 1', function() {
        assert.equal(fib(1), 1);
    });
    it('should return 55 for input 10', function() {
        assert(fib(10), 55);
    })
})