import { TNode } from "./1-二叉树的遍历";

/**
 * 对于根节点 左子树中所有节点的值<根节点的值<右子树中所有节点的值。就是说比根节点小的放在左边 大的放在右边
 * 循环次数最多为二叉树的高度  所以保持二叉树的平衡很重要 平衡时 时间复杂度为O(log n)
 * 二叉搜索树不允许存在重复节点
 */
let n1 = new TNode(1),
    n2 = new TNode(2),
    n3 = new TNode(3),
    n4 = new TNode(4),
    n5 = new TNode(5);
let root: TNode = n3;
n3.left = n1;
n3.right = n4;
n1.right = n2;
n4.right = n5;

/**
 * 二叉搜索树
 * 遍历是升序的
 * 进行频繁的插入和删除 可能导致二叉树退化为链表
 */
class BinarySearchTree {
    root: TNode = n3;
    // 查找节点
    search(num: number): TNode | null {
        let cur = root;
        while (cur !== null) {
            if (cur.value < num) cur = cur.right;
            else if (cur.value > num) cur = cur.left;
            else break;
        }
        return cur;
    }

    // 删除节点
    remove(num: number): void {
        if (this.root === null) return;
        let cur: TNode | null = this.root,
            pre: TNode | null = null;
        // 循环查找 越过叶节点后跳出
        while (cur !== null) {
            if (cur.value === num) break;
            pre = cur;
            if (cur.value < num) cur = cur.right;
            else cur = cur.left;
        }

        // 若无待删除节点 则直接返回
        if (cur === null) return;
        if (cur.left === null || cur.right === null) {
            const child: TNode | null = cur.left !== null ? cur.left : cur.right;
            // 删除节点
            if (cur !== this.root) {
                if (pre.left === cur) pre.left = child;
                else pre.left = child;
            } else {
                this.root = child;
            }
        }else{
            let tmp:TNode|null = cur.right;
            while (tmp.left !== null) {
                tmp = tmp.left
            }
            this.remove(tmp.value)
            cur.value = tmp.value
        }
    }
}
