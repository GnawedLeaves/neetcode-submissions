class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        // need to run through and check for the shortest one to the left of the pointer
        // then run backwards to check for the shortest one to the right
        //trying the Prefix & Suffix Arrays solution
        // idea is to run through twice, first we create a maxLeft array to check the max height at any point i
        //same for the to the right

        const n = height.length;
        const maxLeft = new Array(n).fill(0);
        const maxRight = new Array(n).fill(0);

        let res = 0;

        maxLeft[0] = height[0];
        for (let i = 1; i < n - 1; i++) {
            maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
        }

        maxRight[n - 1] = height[n - 1];
        for (let j = n - 2; j > 0; j--) {
            maxRight[j] = Math.max(height[j], maxRight[j + 1]);
        }

        // now at each point, we look left and right, get the min. then we minus our own height then we can see how much water our point can hold

        for (let k = 0; k < n - 1; k++) {
            const sum = Math.min(maxLeft[k], maxRight[k]) - height[k];
            if (sum > 0) {
                res += sum;
            }
        }

        return res;
    }
}
