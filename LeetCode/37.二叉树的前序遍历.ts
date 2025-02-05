/**
 * 力扣：https://leetcode.cn/problems/binary-tree-preorder-traversal/description/
 */

function preorderTraversal(root: TreeNode | null): number[] {
    let tempArr = [];
    function traversal(node: TreeNode, res: number[]) {
        if (node === null) return;
        res.push(node.val);
        traversal(node.left, res);
        traversal(node.right, res);
    }
    traversal(root, tempArr);
    return tempArr;
}
console.log(preorderTraversal(null));
