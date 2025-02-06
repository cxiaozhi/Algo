/**
 * 给定一棵二叉树的前序遍历 preorder 和中序遍历 inorder ，请从中构建二叉树，返回二叉树的根节点。假设二叉树中没有值重复的节点（如图 12-5 所示）。
 */
class TreeNode {
    left: TreeNode;
    right: TreeNode;
    val: number;
    constructor(parameters: number) {
        this.val = parameters;
    }
}
function dfs(preorder: number[], inorderMap: Map<number, number>, i: number, l: number, r: number) {
    if (r - l < 0) return null;
    const root: TreeNode = new TreeNode(preorder[i]);
    const m = inorderMap.get(preorder[i]);
    root.left = dfs(preorder, inorderMap, i + 1, l, m - 1);
    root.right = dfs(preorder, inorderMap, i + 1 + m - l, m + 1, r);
    return root;
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let inorderMap = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    const root = dfs(preorder, inorderMap, 0, 0, inorder.length - 1);
    return root;
}

console.log(buildTree([-1], [-1]));
