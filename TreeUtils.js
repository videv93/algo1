module.exports = {
    printTree: function(root) {
        if (root === null) {
            return;
        }
        console.log(root.val);
        this.printTree(root.left);
        this.printTree(root.right);
    }
}