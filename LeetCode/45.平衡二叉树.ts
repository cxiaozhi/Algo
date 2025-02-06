/**
 * 力扣: https://leetcode.cn/problems/balanced-binary-tree/description/
 */

import { TreeNode } from "../1-分治/1-构建树问题";

// 自底向上
function isBalanced(root: TreeNode | null): boolean {
    function balanced(node: TreeNode) {
        if (!node) return 0;
        const left = balanced(node.left)
        const right = balanced(node.right)
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1 // 返回是否是平衡子树
        }
        return Math.max(left,right) + 1 // 返回深度
    }

    return balanced(root) !== -1
}
