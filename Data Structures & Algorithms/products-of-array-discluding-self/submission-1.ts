class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // i htink its a left to right thing
        const n = nums.length;
        let result = new Array<number>(n);
        result[0] = 1;

        for (let i = 1; i < n; i++) {
            result[i] = nums[i - 1] * result[i - 1];
        }


        let suffix = 1
        for (let j = n - 1; j >= 0; j--) {
            result[j] = result[j] * suffix
            suffix *= nums[j]
            console.log({suffix})
        }


        return result;
    }
}
