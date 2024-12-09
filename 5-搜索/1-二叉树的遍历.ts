class TNode {
    value: number;
    left: TNode | null;
    right: TNode | null;
    constructor(val?: number, left?: TNode | null, right?: TNode | null) {
        this.value = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

let n1 = new TNode(1),n2 = new TNode(2),n3 = new TNode(3),n4 = new TNode(4),n5 = new TNode(5);
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5

// 插入p
const p = new TNode(0)
p.left = n1.left
n1.left = p

// 删除p
n1.left = p.left