/**
 * 给定一个正整数数组 nums 和一个目标正整数 target ，请找出所有可能的组合，使得组合中的元素和等于 target 。给定数组无重复元素，每个元素可以被选取多次。请以列表形式返回这些组合，列表中不应包含重复组合。
 */
function backtrack3(state: number[], target: number, choices: number[], start: number, res: number[][]) {
    if (target === 0) {
        res.push([...state]);
        return;
    }

    for (let i = start; i < choices.length; i++) {
        if (target - choices[i] < 0) {
            break;
        }
        state.push(choices[i]);
        backtrack3(state, target - choices[i], choices, i, res);
        state.pop();
    }
}

function subsetSum(nums: number[], target: number): number[][] {
    const state = [];
    nums.sort((a, b) => a - b);
    const start = 0;
    const res = [];
    backtrack3(state, target, nums, start, res);
    return res;
}

console.log(subsetSum([3, 4, 5], 100));
