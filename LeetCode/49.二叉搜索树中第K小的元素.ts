import { TreeNode } from "../1-分治/1-构建树问题";

/**
 * 力扣: https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/
 */
function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let tart = 0;
    function dfs(root: TreeNode | null) {
        if (!root) return;
        dfs(root.left);
        count++;
        if (count == k) {
            tart = root.val;
            return;
        }
        dfs(root.right);
    }
    dfs(root);
    return tart;
}
