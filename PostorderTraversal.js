var postorder = function(root, acc) {
    if (root) {
        if (root.left) postorder(root.left, acc);
        if (root.right) postorder(root.right, acc);
        acc.push(root.val);
    }
    return acc;
}
var postorderTraversal = function(root) {
    return postorder(root, []);
};

module.exports = postorderTraversal;