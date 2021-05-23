var assert = require('assert');
var postorderTraversal = require('../PostorderTraversal');
var TreeNode = require('../TreeNode');
describe('PostorderTraversal', function() {
    it('should return [] for input []', function() {
        var root = null;
        assert.deepStrictEqual(postorderTraversal(root), []);
    });
    it('should return [1,2] for input [1,null,2]', function () {
        var root = new TreeNode(1, null, new TreeNode(2));
        assert.deepStrictEqual(postorderTraversal(root), [2,1]);
    })
})