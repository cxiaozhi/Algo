/**
 * 力扣：https://github.com/sisterAn/JavaScript-Algorithms/issues/47
 * 和41题重复
 */
function levelOrder(root: TreeNode | null): number[][] {
    let result = []
    let que = [root]
    while (que.length) {
        let node = que.shift()
        result.push(node.val)
        if (node.left) {
            que.push(node.left)
        }
        if (node.right) {
            que.push(node.right)
        }
    }
    return result
};