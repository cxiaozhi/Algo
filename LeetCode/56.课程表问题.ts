/**
 * 力扣: https://leetcode.cn/problems/course-schedule/description/
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    if (prerequisites.length <= 1) return true;
    let tempArr1 = [];
    let tempArr2 = [];
    for (let index = 0; index < prerequisites.length; index++) {
        const element = prerequisites[index];
        if (element[0] == element[1]) return false;
        tempArr1.push(element[0]);
        tempArr2.push(element[1]);
    }
    tempArr1.sort((a, b) => a - b);
    tempArr2.sort((a, b) => a - b);
    return !(tempArr1[0] == tempArr2[0] && tempArr1[1] == tempArr2[1]);
}

console.log(
    canFinish(3, [
        [1, 0],
        [1, 2],
        [0, 1],
    ])
);
