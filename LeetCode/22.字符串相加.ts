/**
 * 力扣：https://leetcode.cn/problems/add-strings/description/
 */

export function addStrings(num1: string, num2: string): string {
    let pointOne = num1.length - 1;
    let pointTwo = num2.length - 1;
    let carryBit = 0
    let res = ""
    while (pointOne >= 0 || pointTwo >= 0) {
        let intOne = 0;
        let intTwo = 0;
        let temp = 0
        if (pointOne >= 0) {
            intOne = Number(num1[pointOne]);
            pointOne--
        }
        if (pointTwo >= 0) {
            intTwo = Number(num2[pointTwo]);
            pointTwo--
        }
        temp = carryBit + intOne + intTwo
        res = (temp % 10) + res
        carryBit = Math.floor(temp / 10) 
    }
    if (carryBit > 0) {
        res = carryBit + res
    }
    return res;
}

console.log(addStrings("456","77"));

