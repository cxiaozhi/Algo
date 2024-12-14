/**
 * 给定一个长度为 n 的数组 nums ，元素按从小到大的顺序排列且不重复。请查找并返回元素 target 在该数组中的索引。若数组不包含该元素，则返回-1。
 */
function binarySearch(nums: number[], target: number): number {
    let i = 0,
        j = nums.length - 1;
    while (i <= j) {
        const m = Math.floor(i + (j - 1) / 2);
        if (nums[m] < target) {
            i = m + 1;
        } else if (nums[m] > target) {
            j = m - 1;
        } else {
            return m; // 找到目标元素 返回其索引
        }
    }
    return -1;
}
