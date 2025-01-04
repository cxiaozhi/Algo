/**
 * 力扣：https://github.com/sisterAn/JavaScript-Algorithms/issues/10
 */
const getIntersetiton = (...arrs)=>{
    return Array.from(new Set(arrs.reduce((total,arr)=>{
        console.log(total,arr);
        
        return arr.filter(item=>total.includes(item))
    })))
}


console.log(getIntersetiton([1,2,3],[2,3,4]));
