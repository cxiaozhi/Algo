/**
 * 力扣:https://leetcode.cn/problems/two-sum/description/
 */
class TwoSum {
    nums = [2, 7, 11, 15];
    target = 19;
    twoSum(nums: number[], target: number): number[] {
        // for (let index = 0; index < nums.length - 1; index++) {
        //     for (let j = index + 1; j < nums.length; j++) {
        //         if (nums[index] +  nums[j] == target) {
        //             temp.push(index)
        //             temp.push(j);
        //             return temp;
        //         };
        //     }
        // }
        // while(nums[right] > target){
        //     right--
        // }
        let hash = {};
        for (let i = 0; i < nums.length; i++) {
            console.log(hash);
            
            if (hash[target - nums[i]] !== undefined) {
                return [hash[target - nums[i]], i];
            }
            hash[nums[i]] = i;
        }
        return [];
    }
}

let twoSum = new TwoSum();

console.log(twoSum.twoSum([3, 2, 3], 6));
