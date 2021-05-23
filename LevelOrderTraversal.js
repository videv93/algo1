var levelOrder = function(root) {
    const levels = [];
    if (root === null) {
        return levels;
    }
    const queue = [root];
    while (queue.length) {
        const length = queue.length;
        const level = [];
        for (var i = 0; i < length; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            level.push(node.val);
        }
        levels.push(level);
    }
    return levels;
};

module.exports = levelOrder;