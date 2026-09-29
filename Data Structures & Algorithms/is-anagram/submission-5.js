class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        //isnt it just 2 seperate for loops and checking if one is in the other
        const sMap = new Map();
        const tMap = new Map();

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            sMap.set(char, sMap.has(char) ? sMap.get(char) + 1 : 1);
        }
        for (let i = 0; i < t.length; i++) {
            const char = t[i];
            tMap.set(char, tMap.has(char) ? tMap.get(char) + 1 : 1);
        }


        for (let [key,value] of sMap) {
            if (!tMap.has(key)) return false;
            if (tMap.get(key) !== sMap.get(key)) return false;
        }
        return true;
    }
}
