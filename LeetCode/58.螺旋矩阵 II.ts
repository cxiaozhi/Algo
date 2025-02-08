/**
 * 力扣: https://leetcode.cn/problems/spiral-matrix-ii/description/
 */
function generateMatrix(n: number): number[][] {
    let temp: number[][] = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    // 初始化上下左右边界
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let num = 1;
    while (top <= bottom && left <= right) {
        // 从左到右填充上边界
        for (let col = left; col <= right; col++) {
            temp[top][col] = num++;
        }
        // 上边界下移
        top++;

        // 从上到下填充右边界
        for (let row = top; row <= bottom; row++) {
            temp[row][right] = num++;
        }
        // 右边界左移
        right--;

        // 如果上边界还小于等于下边界，说明还可以继续填充下边界
        if (top <= bottom) {
            // 从右到左填充下边界
            for (let col = right; col >= left; col--) {
                temp[bottom][col] = num++;
            }
            // 下边界上移
            bottom--;
        }

        // 如果左边界还小于等于右边界，说明还可以继续填充左边界
        if (left <= right) {
            // 从下到上填充左边界
            for (let row = bottom; row >= top; row--) {
                temp[row][left] = num++;
            }
            // 左边界右移
            left++;
        }
    }
    return temp;
}
console.log(generateMatrix(7));
