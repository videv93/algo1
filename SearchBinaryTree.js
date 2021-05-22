var TreeNode = require('./TreeNode');
var TreeUtils = require('./TreeUtils');
var searchBST = function(root, val) {
    if (root === null || root.val === val) {
        return root;
    }
    var leftFind = searchBST(root.left, val);
    if (leftFind) {
        return leftFind;
    }
    var rightFind = searchBST(root.right, val);
    if (rightFind) {
        return rightFind;
    }
    return null;
}

var tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
// TreeUtils.printTree(tree);
var result = searchBST(tree, 5);
TreeUtils.printTree(result);