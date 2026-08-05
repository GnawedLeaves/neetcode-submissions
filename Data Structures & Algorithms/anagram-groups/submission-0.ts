class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // create a key from the str then add to array
        const map = new Map<string, string[]>()

        for (let i = 0 ; i < strs.length; i++){
            const str = strs[i]
            const key = str.split("").sort().join();
            if (!map.has(key)) {
                map.set(key, [])
            }
            const mapArr = map.get(key)
            mapArr.push(str)
            map.set(key,mapArr)
        }
        
        return Array.from(map.values())
    }
}
