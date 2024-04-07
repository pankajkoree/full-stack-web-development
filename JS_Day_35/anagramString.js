// checking whether the two string is Anagram or not.

function anagramString(str1, str2) {
    let strObject = {};
    if (str1.length != str2.length) {
        return false;
    }
    for (ch of str1) {
        strObject[ch] = (strObject[ch] || 0) + 1;
    }
    console.log(strObject);

    for (ch of str2) {
        if (!strObject[ch]) {
            return false;
        }
        strObject[ch]--;
        
    }
    return true;
}
console.warn(anagramString("ate", "tea"));
