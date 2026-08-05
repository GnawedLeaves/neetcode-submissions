class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        let solution = [];

        for (let j = 0; j < k; j++) {
            let highest = 0;
            let highestNum = nums[0];
            for (const [key, value] of map) {
                if (value > highest && !solution.includes(key)) {
                    highest = value;
                    highestNum = key;
                }
            }
            solution.push(highestNum);
        }
        return solution;
    }
}
