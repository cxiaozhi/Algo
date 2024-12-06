/**
    输入一个数组 
    其中的每个元素代表一个垂直隔板的高度。数组中的任意两个隔板，以及它们之间的空间可以组成一个容器。
    容器的容量等于高度和宽度的乘积（面积），其中高度由较短的隔板决定，宽度是两个隔板的数组索引之差。
    请在数组中选择两个隔板，使得组成的容器的容量最大，返回最大容量。
 */
function maxCapacity(ht:number[]):number {
    let i = 0,j=ht.length -1,res = 0;
    while (i < j) {
        const cap:number = Math.min(ht[i],ht[j]) * (j-i)
        res = Math.max(res,cap)
        // 向内移动短板
        if(ht[i] < ht[j]){
            i += 1
        }else{
            j -= 1
        }
        console.log(i,j,cap);
    }
    return res
}

console.log(maxCapacity([6,1,2,3,5,4,6,8,7]));
