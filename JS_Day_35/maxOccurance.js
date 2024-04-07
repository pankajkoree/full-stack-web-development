let strObject = {};
let maxKey = '';
function maxOccurance(str) {

    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        if (!strObject[key]) {
            strObject[key] = 0;
        }
        strObject[key]++;
        if (maxKey == '' || strObject[key] > strObject[maxKey]) {
            maxKey = key;
        }
    }
}

// maxOccurance("apple");
maxOccurance("cricket");
console.log(maxKey);
console.log(strObject);