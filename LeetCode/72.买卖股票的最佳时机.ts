/**
 * 力扣: https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/
 */
function maxProfit(prices: number[]): number {
    let max = 0;
    let minP = Infinity;
    for (let index = 0; index < prices.length; index++) {
        const element = prices[index];
        if (element > minP) {
            max = Math.max(max, element - minP);
        }
        minP = Math.min(element, minP);
    }
    return max;
}
console.log(maxProfit([7, 6, 4, 3, 1]));
