class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let p1 = 0
        let p2 = numbers.length - 1;
        while (p1 < p2) {
            const sum = numbers[p2] + numbers[p1];
            if (sum === target) { 
                return [p1 + 1,p2 + 1]
            }
            if (sum > target  ) {
                //too big we reduce right pointer
                p2--
            }
            else {
                p1++
            }
        }
    }
}
