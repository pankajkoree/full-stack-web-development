let data = [34, 56, 78, 12, 53];
function selectionSort(data) {
    let minElement;
    for (let i = 0; i < data.length; i++) {
        minElement = i;

        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minElement]) {
                minElement = j;
            }

        }
        let temp = data[minElement];
        data[minElement] = data[i];
        data[i] = temp;
    }
}

selectionSort(data);
console.log(data);
