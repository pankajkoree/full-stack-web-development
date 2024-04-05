data = [12, 4, 35, 23, 55, 56, 2, 67];
function InsertionSort(data) {
    for (let i = 1; i < data.length; i++) {
        let current = data[i];
        let j = i - 1;
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j];
            j = j - 1;

        }
        data[j + 1] = current;
    }
}


InsertionSort(data);
console.log(data);