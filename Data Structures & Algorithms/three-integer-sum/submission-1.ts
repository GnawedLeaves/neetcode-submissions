class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const res = [];
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > 0) break;
            //this line will check if the number after is the same as before, if yes then skip this iteration because it will produce the same results
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            const iNum = nums[i];
            let p1 = i + 1;
            let p2 = nums.length - 1;
            while (p1 < p2) {
                const sum = nums[p1] + nums[p2] + iNum;
                if (sum === 0) {
                    res.push([iNum, nums[p1], nums[p2]]);
                    p1++;
                    p2--;
                    while (p1 < p2 && nums[p1] === nums[p1 - 1]) {
                        p1++
                    }
                }
                if (sum > 0) {
                    p2--;
                }
                if (sum < 0) {
                    p1++;
                }
            }
        }
        return res;
    }
}
