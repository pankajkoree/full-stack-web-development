function palindromeString(data) {
    let start = 0;
    let end = data.length - 1;
    let result = true;

    while (end > start) {
        if (data[start] != data[end]) {
            return false;
        }
        start++;
        end--;

    }
    return result;
}

console.log(palindromeString("eye"));

console.log(palindromeString("apple"));