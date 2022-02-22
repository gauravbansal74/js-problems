/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = "";
    for(let i = 0; i < strs[0].length; i++) {
        if(!strs.every((str) => str[i] === strs[0][i])) {
            break;
        }
        result+= strs[0][i];
      }
    return result;
};