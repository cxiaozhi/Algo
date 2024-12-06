/**
给定一个正整数，将其切分为至少两个正整数的和，求切分后所有整数的乘积最大是多少?
*/
function maxProductCutting(n: number) {
    // 当n <=3 时 必须切分出一个1
    if (n <= 3) {
        return 1 * (n - 1);
    }
    // 贪心地切分出3 ， a 为3的个数，b为余数
    let a: number = Math.floor(n / 3);
    let b: number = n % 3;
    if (b === 1) {
        // 当余数为1 将一对 1*3 转化为 2*2
        return Math.pow(3, a - 1) * 2 * 2;
    }

    if (b === 2) {
        // 当余数是2  不做处理
        return Math.pow(3, a) * 2;
    }
    return Math.pow(3, a);
}


console.log(maxProductCutting(100));
