import { TreeNode } from "../1-分治/1-构建树问题";

/**
 * 力扣: https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    }
    return left || right;
}
let q = new TreeNode(2, new TreeNode(7), new TreeNode(4));
let p = new TreeNode(5, new TreeNode(6), q);

let root = new TreeNode(3, p, new TreeNode(1, new TreeNode(0), new TreeNode(8)));

console.log(lowestCommonAncestor(root, p, q));
