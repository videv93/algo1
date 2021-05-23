
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    var left = 1 + maxDepth(root.left);
    var right = 1 + maxDepth(root.right);
    return Math.max(left, right);
}
module.exports = maxDepth;