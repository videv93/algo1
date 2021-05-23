var inorder = function(root, acc) {
    if (root) {
        if (root.left) inorder(root.left, acc);
        acc.push(root.val);
        if (root.right) inorder(root.right, acc);
    }
    return acc;
}
var inorderTraversal = function(root) {
    return inorder(root, []);
};

module.exports = inorderTraversal;