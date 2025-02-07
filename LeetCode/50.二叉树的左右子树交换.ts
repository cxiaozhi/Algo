import { TreeNode } from "../1-分治/1-构建树问题";

/**
 * 力扣: https://leetcode.cn/problems/invert-binary-tree/description/
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
}
