class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //create unique key based on the string
        const map = new Map()
        for (let i = 0; i < strs.length; i++){
            const key = strs[i].split("").sort().join("");
            if (!map.has(key)) {
                map.set(key, [strs[i]])
            }else {
                let arr = map.get(key)
                arr.push(strs[i])
                map.set(key,arr)
            }

        }
        return Array.from(map.values())
    }
}
