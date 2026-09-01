class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str = s.trim().split(" ").join("");
        const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
       
        for (let i = 0, j = cleaned.length - 1; i <= j; j--, i++) {
            if (cleaned[i] !== cleaned[j]) return false;
        }

        return true;
    }
}
