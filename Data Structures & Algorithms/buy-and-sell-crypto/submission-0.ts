class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        //trying dp method (3)
        // we need keep track of the max profit we have seen
        // we act like we are selling on the the day i and we minus off the lowest price we've seen so far
        // run through the loop to find the max profit

        let maxProfit = 0;
        let minPrice = prices[0]

        for (let price of prices) {
            if (price < minPrice) minPrice = price;
            if (price - minPrice > maxProfit) maxProfit = price - minPrice
        }
        return maxProfit
        
    }
}
