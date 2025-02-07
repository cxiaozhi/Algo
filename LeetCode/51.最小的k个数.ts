/**
 * 力扣: https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/description/
 */
function inventoryManagement(stock: number[], cnt: number): number[] {
    stock.sort((a, b) => a - b); // 这题的提升效率的关键是这个排序算法的实现
    return stock.slice(0, cnt);
}
