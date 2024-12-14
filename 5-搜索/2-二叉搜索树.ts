import { TNode } from "./1-二叉树的遍历"

/**
 * 对于根节点 左子树中所有节点的值<根节点的值<右子树中所有节点的值。就是说比根节点小的放在左边 大的放在右边
 * 循环次数最多为二叉树的高度  所以保持二叉树的平衡很重要 平衡时 时间复杂度为O(log n)
 */
let n1 = new TNode(1),n2 = new TNode(2),n3 = new TNode(3),n4 = new TNode(4),n5 = new TNode(5);
let root:TNode = n3
n3.left = n1
n3.right = n4
n1.right = n2
n4.right = n5
function search(num:number):TNode|null {
    let cur = root
    while (cur!== null) {
        if (cur.value < num) cur = cur.right
        else if(cur.value > num) cur = cur.left
        else break
    }
    return cur
}

console.log(search(1));

