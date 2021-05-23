/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    this.queue.push(value);
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    var value = this.queue.slice(0, 1);
    return !!value;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.queue[0]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return !this.queue.length;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {

};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */