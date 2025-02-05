/**
 * 力扣：https://leetcode.cn/problems/binary-tree-postorder-traversal/description/
 */
function postorderTraversal(root: TreeNode | null): number[] {
    let tempArr = [];
    function traversal(node: TreeNode, res: number[]) {
        if (node === null) return;
        traversal(node.left, res);
        traversal(node.right, res);
        res.push(node.val);
    }
    traversal(root, tempArr);
    return tempArr;
};