/**
 * 力扣: https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 */
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right))
}
