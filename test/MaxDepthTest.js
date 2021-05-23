var assert = require('assert');
var maxDepth = require('../MaxDepth');
var TreeNode = require('../TreeNode');

describe('MaxDepth', function() {
    it('should return 3 for input [3,9,20,null,null,15,7]', function() {
        var root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
        assert.strictEqual(maxDepth(root), 3);
    })
})