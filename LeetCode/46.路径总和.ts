import { TreeNode } from "../1-分治/1-构建树问题";

/**
 * 力扣: https://leetcode.cn/problems/path-sum/description/
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    function dfs(root: TreeNode | null, count: number) {
        if (!root) return false;

        count += root.val;
        if (!root.left && !root.right) {
            return count == targetSum;
        }
        return dfs(root.left, count) || dfs(root.right, count);
    }
    return dfs(root, 0);
}
