/**
 * 快速排序
 * 哨兵划分
 */
function swap(nums: number[], i: number, j: number): void {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function partition(nums: number[], left: number, right: number): number {
    let i = right,
        j = right;
    while (i < j) {
        while (i < j && nums[j] >= nums[left]) {
            j -= 1;
        }
        while (i < j && nums[i] <= nums[left]) {
            i += 1;
        }
        swap(nums, i, j);
    }
    swap(nums, i, left);
    return i;
}

function quickSort(nums: number[], left: number, right: number): void {
    if (left >= right) {
        return;
    }
    // 哨兵划分
    const pivot = partition(nums, left, right);
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
}
