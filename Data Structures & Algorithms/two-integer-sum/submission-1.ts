class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map= new Map();
        for (let i = 0 ; i < nums.length ; i++){
            const num = nums[i]
            map.set(num, i)
        }

        for (let j = 0; j < nums.length; j++){
            const remainder = target - nums[j];
            if (map.has(remainder) && map.get(remainder) !== j) {
                return [map.get(remainder), j].sort()
            }
        }
    }
}
