/**
 * 插入排序
 */
function insertionSort(nums: number[]): void {
    for (let i = 1; i < nums.length; i++) {
        const base = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > base) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = base;
        console.log("j--->", i, j, base);
        console.log("nums--->", nums);
    }
}

let nums3 = [10, 56, 9, 4, 2, 3, 6, 4, 5];
insertionSort(nums3);
console.log(nums3);
