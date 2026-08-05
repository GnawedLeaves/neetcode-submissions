class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // my 2 map solution is too slow so heres an improved method by using only 1 map
        // then we count the characters immediately: tmap will minus and smap will add
        // at the end we see if anyone is !== 0

        if (s.length !== t.length) return false;
        const map = new Map();

        for (let i = 0; i < s.length; i++) {
            const sChar = s[i];
            const tChar = t[i];

            map.set(sChar, (map.get(sChar) || 0) + 1);
            map.set(tChar, (map.get(tChar) || 0) - 1);
        }

        for (const count of map.values()) {
            if (count !== 0) return false;
        }


        return true;
    }
}
