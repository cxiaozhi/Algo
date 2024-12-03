/**
 * 给定n个物品,第i个物品的重量为wgt[i-1],价值为val[i-1],和一个容量为cap的背包.每个物品只能选择一次,但可以选择物品的一部分,价值根据选择的重量比例计算,问在限定背包容量下背包中物品的最大价值.
 */

class Item {
    w:number;// 物品重量
    v:number;// 物品价值
    constructor(w:number,v:number){
        this.w = w;
        this.v = v;
    }
}

function fractionalKnapsack(wgt:number[],val:number[],cap:number):number{
    const items:Item[] = wgt.map((w,i)=>new Item(w,val[i]))
    items.sort((a,b)=>b.v/b.w - a.v/a.w)
    let res = 0; // 最大价值
    for (const item of items) {
        if (item.w <= cap) {
            // 剩余容量充值
            res += item.v;
            cap -= item.w
        }else{
            res += (item.v / item.w)*cap
            break
        }
    }
    return res
}

console.log(fractionalKnapsack([1,2,3,4,56,5],[2,3,4,5,1,2],50));


