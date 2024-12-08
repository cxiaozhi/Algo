/**
 给定n个物品，第i个物品的重量为wgt[i-1] 、价值为val[i-1]，和一个容量为cap的背包。每个物品只能选择一次，问在限定背包容量下能放入物品的最大价值。
*/

/**
 * @param wgt 物品重量
 * @param val 物品价值
 * @param i 物品编号
 * @param c 背包容量
 * @returns
 */
function knapsackDFS(wgt: number[], val: number[], i: number, c: number):number {
    if (i === 0 || c === 0) {
        return 0;
    }

    if (wgt[i - 1] > c) {
        return knapsackDFS(wgt, val, i - 1, c);
    }

    // 计算放入和不放入两种方案的价值
    const no:number = knapsackDFS(wgt, val, i - 1, c);
    const yes:number = knapsackDFS(wgt, val, i - 1, c - wgt[i - 1]) + val[i - 1];
    console.log("no",no,"yes",yes);
    
    return Math.max(no,yes)
}


console.log(knapsackDFS([10, 20, 30, 40, 50], [50, 120, 150, 210, 240], 5, 50));
