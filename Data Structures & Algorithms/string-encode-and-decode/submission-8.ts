class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs: string[]): string {
        const convertToEncode = (char: string) => {
            const ascii = char.charCodeAt(0) + 1;
            let resultChar = String.fromCharCode(ascii);
            return resultChar;
        };
        let encodedStr = "";
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            let newStr = "";
            for (let j = 0; j < str.length; j++) {
                const char = str[j];
                const newChar = convertToEncode(char);
                newStr += newChar;
            }
  
            encodedStr += newStr + "~!";
        }
        return encodedStr.trim();
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const convertToDecode = (char: string) => {
            const ascii = char.charCodeAt(0) - 1;
            let resultChar = String.fromCharCode(ascii);
            return resultChar;
        };
        const result = [];
        const newArray = str.split("~!");
        if (newArray[newArray.length - 1] === "") { 
            newArray.pop()
        }
        for (let i = 0; i < newArray.length; i++) {
            const str = newArray[i];
            let newStr = "";
            for (let j = 0; j < str.length; j++) {
                const decodedChar = convertToDecode(str[j]);
                newStr += decodedChar;
            }
            result.push(newStr);
        }
        return result;
    }
}
