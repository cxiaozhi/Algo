/**
 * 力扣：https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
 */
function inorderTraversal(root: TreeNode | null): number[] {
    let tempArr = [];
    function traversal(node: TreeNode, res: number[]) {
        if (node === null) return;
        traversal(node.left, res);
        res.push(node.val);
        traversal(node.right, res);
    }
    traversal(root, tempArr);
    return tempArr;
};