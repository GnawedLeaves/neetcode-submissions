class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // create a stack, when you see open bracket push to stack
        // when detect a closing bracket then pop the stack if its the same then ok
        // if not then return false

        if (s.length < 2) return false;
        const stack: string[] = [];
        const map: Record<string, string> = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (let char of s) {
            if (char in map) {
                // closing char detected
                const mapValue = map[char];
                if (mapValue !== stack.pop()) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0 ;
    }
}
