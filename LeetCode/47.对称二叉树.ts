import { TreeNode } from "../1-分治/1-构建树问题";

/**
 * 力扣: https://leetcode.cn/problems/symmetric-tree/description/
 */
function isSymmetric(root: TreeNode | null): boolean {
    function dfs(left: TreeNode,right: TreeNode) {
        if (!left && !right) {
            return true
        }
        if (!left || !right) {
            return false
        }
        if (left.val !== right.val) {
            return false
        }

        return dfs(left.left,right.right) && dfs(left.right,right.left)
    }
    return dfs(root.left,root.right)
}
