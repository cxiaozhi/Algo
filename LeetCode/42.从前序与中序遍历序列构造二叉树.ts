/**
 * 力扣: https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let inorderMap = new Map();
    for (let index = 0; index < inorder.length; index++) {
        const element = inorder[index];
        inorderMap.set(element, index);
    }
    /**
     * @param preStart 前序起点
     * @param inStart 中序起点
     * @param inEnd 中序终点
     * @returns
     */
    function dfs(preStart: number, inStart: number, inEnd: number) {
        if (inEnd < inStart) return null;
        let root = new TreeNode(preorder[preStart]);
        // 获取根节点在中序里的位置
        let rootInInorder = inorderMap.get(preorder[preStart]);
        // 计算左子树节点数
        const leftSize = rootInInorder - inStart;
        root.left = dfs(preStart + 1, inStart, rootInInorder - 1);
        root.right = dfs(preStart + 1 + leftSize, rootInInorder + 1, inEnd);
        return root;
    }

    let root = dfs(0, 0, inorder.length - 1);
    return root;
}
