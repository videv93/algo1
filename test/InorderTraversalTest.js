var assert = require('assert');
var inorderTraversal = require('../InorderTraversal');
var TreeNode = require('../TreeNode');
describe('InorderTraversal', function() {
    it('should return [] for input []', function() {
        var root = null;
        assert.deepStrictEqual(inorderTraversal(root), []);
    });
    it('should return [1,2] for input [1,null,2]', function () {
        var root = new TreeNode(1, null, new TreeNode(2));
        assert.deepStrictEqual(inorderTraversal(root), [1,2]);
    })
})