var Queue = function() {
    this.queue = [];
    this.start = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
Queue.prototype.enQueue = function(value) {
    this.queue.push(value);
    return true;
};

/**
 * @return {boolean}
 */
Queue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.start++;
    return true;
};

/**
 * @return {number}
 */
Queue.prototype.Front = function() {
    return this.queue[this.start]
};

/**
 * @return {number}
 */
Queue.prototype.Rear = function() {

};

/**
 * @return {boolean}
 */
Queue.prototype.isEmpty = function() {
    return this.start >= this.queue.length;
};

/**
 * @return {boolean}
 */
Queue.prototype.isFull = function() {

};

/**
 * Your Queue object will be instantiated and called as such:
 * var obj = new Queue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

module.exports = Queue;