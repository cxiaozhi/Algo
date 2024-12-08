/**
 * 输入一个整数数组，其中不包含重复元素，返回所有可能的排列。
 */
function backtrack(state: number[], choices: number[], selected: boolean[], res: number[][]): void {
    // 当状态长度等于元素数量时 记录解
    if (state.length === choices.length) {
        res.push([...state]);
        return;
    }

    choices.forEach((choice, i) => {
        if (!selected[i]) {
            selected[i] = true;
            state.push(choice);
            backtrack(state, choices, selected, res);
            selected[i] = false;
            state.pop();
        }
    });
}

function permutations(nums: number[]): number[][] {
    const res: number[][] = [];
    backtrack([], nums, Array(nums.length).fill(false), res);
    return res;
}

console.log(permutations([1, 2, 3]));
