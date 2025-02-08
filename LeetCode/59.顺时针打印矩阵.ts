/**
 * 力扣: https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/description/
 */
function spiralArray(array: number[][]): number[] {
    let result = [];
    if (array.length == 0) return result
    let top = 0;
    let bottom = array.length - 1;
    let left = 0;
    let right = array[0].length - 1;
    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            result.push(array[top][col]);
        }
        top++;
        for (let row = top; row <= bottom; row++) {
            result.push(array[row][right]);
        }
        right--;
        if (left <= right && top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(array[bottom][col]);
            }
            bottom--;
        }

        if (left <= right && top <= bottom) {
            for (let row = bottom; row >= top; row--) {
                result.push(array[row][left]);
            }
            left++;
        }
    }
    return result;
}
console.log(
    spiralArray([[2,3]])
);
