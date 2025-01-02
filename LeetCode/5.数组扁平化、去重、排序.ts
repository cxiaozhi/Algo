/**
 * 力扣：https://github.com/sisterAn/JavaScript-Algorithms/issues/5
 */
let arr5 = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// 扁平化
const flatent = (arr: Array<number>) => arr.flat(Infinity);
// 去重
const unique = (arr: Array<number>) => Array.from(new Set(arr));
// 排序
const sort = (arr: Array<number>) => arr.sort((a, b) => a - b);

// 函数组合
const compose =
    (...fns: Function[]) =>
    (initValue: any[]) =>
        fns.reduceRight((y, fn) => {
            console.log(y);

            return fn(y);
        }, initValue);

// 组合后函数
// const lastFun = compose(sort, unique, flatent);
// console.log(lastFun(arr5));

let res = arr5.reduceRight((a:Array<number>,b:any)=>{
    a.push(b)
    return a.flat(Infinity)
},[]);

console.log(res);

