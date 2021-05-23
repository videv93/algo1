var assert = require('assert');
var preorderTraversal = require('../PreorderTraversal');
var TreeNode = require('../TreeNode');
describe('PreorderTraversal', function() {
    it('should return [] for input []', function() {
        var root = null;
        assert.deepStrictEqual(preorderTraversal(root), []);
    });
    it('should return [1,2] for input [1,null,2]', function () {
        var root = new TreeNode(1, null, new TreeNode(2));
        assert.deepStrictEqual(preorderTraversal(root), [1,2]);
    })
})