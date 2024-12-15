/**
 * 选择排序 每次选择最小的交换位置
 */
function selectionSort(nums: number[]): void {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let k = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[k]) {
                k = j;
            }
        }
        [nums[i], nums[k]] = [nums[k], nums[i]];
    }
}
let nums = [4, 56, 9, 4, 2, 3, 6, 4, 5];
selectionSort(nums);
console.log(nums);
