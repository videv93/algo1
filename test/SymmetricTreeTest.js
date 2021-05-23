var TreeNode = require('../TreeNode');
var isSymmetric = require('../SymmetricTree');
var assert = require('assert');
describe('SymmetricTree', function() {
    it('should return true for [1,2,2,3,4,4,3]', function() {
        var root = new TreeNode(
            1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        );
        assert.equal(isSymmetric(root), true);
    })
})