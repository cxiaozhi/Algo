/**
给定三根柱子，记为 A、B 和 C 。起始状态下，柱子 A 上套着个圆盘，它们从上到下按照从小到大的顺序排列。我们的任务是要把这 个圆盘移到柱子 C 上，并保持它们的原有顺序不变（如图 12-10 所示）。在移动圆盘的过程中，需要遵守以下规则。
1.圆盘只能从一根柱子顶部拿出，从另一根柱子顶部放入。
2.每次只能移动一个圆盘。
3.小圆盘必须时刻位于大圆盘之上。
*/
function move(src: number[], target: number[]): void {
    const pan = src.pop();
    target.push(pan);
}
let srcG = [6,5,4,3,2,1];
let bufG = [];
let targetG = [];
//  求解汉诺塔问题
function dfs2(i: number, src: number[], buf: number[], target: number[]): void {
    if (i === 1) {
        move(src, target);
        return;
    }
    dfs2(i - 1, src, target, buf);
    move(src, target);
    console.log(srcG, bufG, targetG);
    dfs2(i - 1, buf, src, target);
}

function solveHanota(A: number[], B: number[], C: number[]): void {
    const n = A.length;
    dfs2(n, A, B, C);
}
solveHanota(srcG, bufG, targetG);
console.log(srcG, bufG, targetG);

