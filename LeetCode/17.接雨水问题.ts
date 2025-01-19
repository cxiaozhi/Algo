/**
 * 力扣：https://leetcode.cn/problems/trapping-rain-water/description/
 * 思路：双指针，那边小就移动哪边的指针
 */
function trap(height: number[]): number {
    let count = 0
    let left = 0
    let right = height.length - 1
    let leftH = 0
    let rightH = 0
    while ( right > left) {
        if (leftH > height[left]) {
            count = leftH - height[left] + count
        }else{
            leftH = height[left]
        }
        if (rightH > height[right]) {
            count = rightH - height[right] + count
        }else{
            rightH = height[right]
        }
        if (leftH < rightH) {
            left++;
        }else {
            right--;
        }
    }
    return count
};


console.log(trap([2,0,2]));
