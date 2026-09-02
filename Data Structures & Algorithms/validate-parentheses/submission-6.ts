class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length < 2) return false;
        const stack = [];
        const map = {
            "}": "{",
            "]": "[",
            ")": "(",
        };

        for (let i = 0 ; i < s.length; i++){
            //closing bracket detected;
            const char = s[i];
            if (char in map) {
                const popped = stack.pop();
                if (popped !== map[char]) return false
            }
            else {
                stack.push(char)
            }
            
        }

       return stack.length === 0 ;
    }
}
