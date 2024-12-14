import { TNode } from "./1-二叉树的遍历";

/**
 * AVL 树即是二叉搜索树 也是平衡二叉树
 *
 */
class AVLTree {
    root: TNode;
    constructor(parameters) {}
    getHeight(node: TNode) {
        return node === null ? -1 : node.height;
    }
    updateHeight(node: TNode) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }
    // 获取平衡因子 -1<= f <= 1
    balanceFactor(node: TNode): number {
        if (node === null) return 0;
        // 左子树高度减去右子树高度
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    // 右旋操作
    rightRotate(node: TNode): TNode {
        const child = node.left;
        const grandChild = child.right;
        child.right = node;
        node.left = grandChild;
        this.updateHeight(node);
        this.updateHeight(child);
        return child;
    }

    // 左旋操作
    leftRotate(node: TNode): TNode {
        const child = node.right;
        const grandChild = child.left;
        child.left = node;
        node.right = grandChild;
        this.updateHeight(node);
        this.updateHeight(child);
        return child;
    }

    // 旋转
    rotate(node: TNode): TNode {
        const balanceFactor = this.balanceFactor(node);
        // 左偏树
        if (balanceFactor > 1) {
            if (this.balanceFactor(node.left) >= 0) {
                return this.rightRotate(node);
            } else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        // 右偏树
        if (balanceFactor < -1) {
            if (this.balanceFactor(node.right) <= 0) {
                // 左旋
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }
        return node;
    }

    // 递归插入节点
    insertHelper(node: TNode, val: number): TNode {
        if (node === null) {
            return new TNode(val);
        }
        if (val < node.value) {
            node.left = this.insertHelper(node.left, val);
        } else if (val > node.value) {
            node.right = this.insertHelper(node.right, val);
        } else {
            return node;
        }

        this.updateHeight(node);
        node = this.rotate(node);
        return node;
    }

    // 插入节点
    insert(val: number): void {
        this.root = this.insertHelper(this.root, val);
    }

    // 删除节点助手
    removeHelper(node: TNode, val: number): TNode {
        if (node === null) return null;
        // 查找节点并删除
        if (val < node.value) {
            node.left = this.removeHelper(node.left, val);
        } else if (val > node.value) {
            node.right = this.removeHelper(node.right, val);
        } else {
            if (node.left === null || node.right === null) {
                const child = node.left !== null ? node.left : node.right;
                if (child === null) {
                    return null;
                } else {
                    node = child;
                }
            } else {
                let temp = node.right;
                while (temp.left !== null) {
                    temp = temp.left;
                }
                node.right = this.removeHelper(node.right, temp.value);
                node.value = temp.value;
            }
        }
        this.updateHeight(node);
        node = this.rotate(node)
        return node
    }

    // 删除节点
    remove(val:number){
        this.root = this.removeHelper(this.root,val)
    }
}
