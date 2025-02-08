/**
 * 力扣: https://leetcode.cn/problems/course-schedule/description/
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const inDegree = new Array(numCourses).fill(0);
    // 初始化邻接表
    const adjList: number[][] = Array.from({ length: numCourses }, () => []);
    for (const [course, pre] of prerequisites) {
        inDegree[course]++;
        adjList[pre].push(course);
    }
    
    // 将入度为0的节点加入队列
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) {
            queue.push(i);
        }
    }
    
    let count = 0;
    while (queue.length > 0) {
        const node = queue.shift();
        count++;
        for (const neighbor of adjList[node]) {
            console.log("--->",neighbor);
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    console.log("inDegree---->",inDegree);
    console.log("adjList---->",adjList);
    return count === numCourses;
}

console.log(
    canFinish(3, [
        [1, 0],
        [1, 2],
        [0, 1],
    ])
);
