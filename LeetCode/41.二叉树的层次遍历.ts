/**
 * 力扣: https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/description/
 */
function levelOrderBottom(root: TreeNode | null): number[][] {
    if (!root) return [];
    let result = [];
    let que = [root];
    while (que.length) {
        let curr = [],
            temp = [];
        while (que.length) {
            let node = que.shift();
            curr.push(node.val);
            if (node.left) {
                temp.push(node.left);
            }
            if (node.right) {
                temp.push(node.right);
            }
        }
        result.push(curr);
        que = temp;
    }
    return result.reverse();
}
