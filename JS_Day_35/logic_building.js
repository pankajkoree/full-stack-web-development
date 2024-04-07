// building the logic

// unoptimized logic
let data = [34, 56, 21, 7, 44, 67, 55, 98, 66];
let evenData = [];
let count = 0;
function logicBuild(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 == 0) {
            console.warn(data[i]);
            evenData.push(data[i]);
        }

    }
    for (let i = 0; i < evenData.length; i++) {
        evenData[i] *= 2;
    }

    for (let i = 0; i < evenData.length; i++) {
        count++;
    }
}

logicBuild(data);
console.warn(evenData);
console.log(count);

// optimized logic
let EvenVal = [];
let findLength = 0;
function optimizedLogic(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 == 0) {
            console.log(data[i]);
            EvenVal.push(data[i] * 2);
            findLength++;
        }
    }
}

optimizedLogic(data);
console.warn(EvenVal);
console.log(findLength);