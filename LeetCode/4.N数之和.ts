/**
 * 力扣：https://github.com/sisterAn/JavaScript-Algorithms/issues/128
 * 请用算法实现，从给定的无序、不重复的数组A中，取出N个数，使其相加和为M
 */
let arr = [1, 4, 7, 11, 9, 8, 10, 6];
let N = 3;
let M = 27;
/**
 * 实现思路
 * 双指针，先对原数组排序，从首尾开始，如果两数之和大于等于目标值，不对剩余值进行遍历，从大的一方向里收缩一位进行判断，直到两数之和小于目标值，然后遍历剩余值。如果找不到就将比较小的值朝里收缩，再次遍历查找
 */

function sumNNums(arr: number[], targetNum: number) {
    let headIndex = 0;
    let tailIndex = arr.length - 1;
    arr.sort((a, b) => a - b);
    while (headIndex !== tailIndex - 1) {
        if (arr[headIndex] + arr[tailIndex] >= targetNum) {
            if (arr[headIndex] > arr[tailIndex]) {
                tailIndex--;
            } else {
                headIndex++;
            }
            continue;
        }
        console.log("打印", arr[headIndex], arr[tailIndex]);
        for (let index = headIndex + 1; index < tailIndex; index++) {
            if (arr[headIndex] + arr[index] + arr[tailIndex] === targetNum) {
                return [arr[headIndex], arr[index], arr[tailIndex]];
            }
        }
        if (arr[headIndex] < arr[tailIndex]) {
            headIndex++;
        } else {
            tailIndex--;
        }
    }
    return [];
}

/**
 * 参数依次为目标数组、选取元素数目、目标和 把数组看出一个整体，可以算出所有的选择可能性，然后遍历所有的选择可能性， 每一种选择可能性对应着一个二进制数，非常巧妙。但是这种方法遍历次数 多一些
 * 另一种解法是，遍历所有的可能组合，事先排除了数量不对的组合
 * @param arr 
 * @param count 
 * @param sum 
 * @returns 
 */ 
const search = (arr:number[], count:number, sum:number) => {
    // 计算某选择情况下有几个 1，也就是选择元素的个数
    const getCount = (num:number) => {
        let count = 0;
        while (num) {
            num &= num - 1;
            count++;
        }
        return count;
    };

    let len = arr.length,
        bit = 1 << len,
        res = [];

    // 遍历所有的选择情况
    for (let i = 1; i < bit; i++) {
        // 满足选择的元素个数 === count
        if (getCount(i) === count) {
            let s = 0,
                temp = [];

            // 每一种满足个数为 N 的选择情况下，继续判断是否满足 和为 M
            for (let j = 0; j < len; j++) {
                // 建立映射，找出选择位上的元素
                if (i & (1 << (len - 1 - j))) {
                    s += arr[j];
                    temp.push(arr[j]);
                }
            }

            // 如果这种选择情况满足和为 M
            if (s === sum) {
                res.push(temp);
            }
        }
    }

    return res;
};
console.log(search(arr, N, M));
