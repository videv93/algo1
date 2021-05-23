var assert = require('assert');
var Queue = require('../Queue');
describe('Queue', function() {
    it('Should be able to enqueue correctly', function() {
        var queue = new Queue();
        queue.enQueue(1);
        queue.enQueue(2);
        queue.enQueue(3);
        queue.enQueue(4);
        assert.equal(queue.Front(), 1);
    });
    it('Should be able to dequeue correctly', function() {
        var queue = new Queue();
        queue.enQueue(1);
        queue.enQueue(2);
        queue.enQueue(3);
        queue.enQueue(4);
        queue.deQueue();
        assert.equal(queue.Front(), 2);
    })
})