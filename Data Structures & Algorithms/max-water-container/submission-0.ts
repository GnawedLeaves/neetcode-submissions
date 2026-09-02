class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0;
        let left = 0; 
        let right = heights.length - 1; 

        while (left < right) {
            const leftHeight = heights[left]
            const rightHeight = heights[right]

            const area = (right - left) * Math.min(leftHeight, rightHeight);
            if (area > maxArea) maxArea = area;
            if (leftHeight < rightHeight) {
                left++
            }
            else if (leftHeight > rightHeight) {
                right--;
            }
            else {
                left++
            }
        }

        return maxArea
    }
}
