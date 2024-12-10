let nums1 = [-1,0,0,3,3,3,0,0,0],
    nums2 = [1,2,2];
/**
 Do not return anything, modify nums1 in-place instead.
 力扣：https://leetcode.cn/problems/merge-sorted-array/submissions/586297756/
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j = 0
    for (let index = 0; index < nums1.length; index++) {
        if (index >= m) {
            nums1[index] = nums2[j]
            j++;
        }
    }
    
    nums1.sort((a,b)=>a-b)
    
}

merge(nums1, 6, nums2, 3);

console.log(nums1);
