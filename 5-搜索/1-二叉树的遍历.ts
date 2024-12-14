class TNode {
    value: number;
    left: TNode | null;
    right: TNode | null;
    height:number;
    constructor(val?: number, left?: TNode | null, right?: TNode | null,height?:number) {
        this.value = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.height = height === undefined ? null : height;
    }
}

let n1 = new TNode(1),n2 = new TNode(2),n3 = new TNode(3),n4 = new TNode(4),n5 = new TNode(5);
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5

// 插入p
// const p = new TNode(0)
// p.left = n1.left
// n1.left = p

// 删除p
// n1.left = p.left
export {n1,TNode}
// 层序遍历 本质是广度优先搜索 借助队列实现
function BFS(root:TNode | null):number[] {
    const queue = [root]
    const list:number[] = []
    while (queue.length) {
        let node = queue.shift() as TNode;
        list.push(node.value)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }

    return list // 遍历的结果
}