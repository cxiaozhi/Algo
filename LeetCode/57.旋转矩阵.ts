/**
 * 力扣: https://leetcode.cn/problems/rotate-matrix-lcci/description/
 */
function rotate(matrix: number[][]): void {
    let copyArr = [];
    let len = 0;
    // 拷贝副本
    while (len < matrix.length) {
        let temp = [];
        for (let index = 0; index < matrix.length; index++) {
            const element = matrix[index];
            temp.unshift(element[len]);
        }
        copyArr.push(temp);
        len++;
    }
    matrix.map((val, index) => (matrix[index] = copyArr[index]));
}
function rotate1(matrix: number[][]): void {
    for (let row = 0; row < matrix.length / 2; row++) {
        let temp = matrix[row];
        matrix[row] = matrix[matrix.length - row - 1];
        matrix[matrix.length - row - 1] = temp;
    }
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = row + 1; col < matrix[0].length; col++) {
            if (col !== row) {
                let temp = matrix[row][col];
                matrix[row][col] = matrix[col][row];
                matrix[col][row] = temp;
            }
        }
    }
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
rotate1(matrix);
console.log(matrix);
