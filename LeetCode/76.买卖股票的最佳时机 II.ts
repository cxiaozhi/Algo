/**
 * 力扣: https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/
 */

function maxProfit2(prices: number[]): number {
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
           profit += prices[i+1] - prices[i]
        }
        
    }
    return profit;
}

console.log(maxProfit2([1,2,3,4,5]));
