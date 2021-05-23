var preorder = function(root, acc) {
    if (root) {
        acc.push(root.val);
        if (root.left) preorder(root.left, acc);
        if (root.right) preorder(root.right, acc);
    }
    return acc;
}
var preorderTraversal = function(root) {
    return preorder(root, []);
};

module.exports = preorderTraversal;