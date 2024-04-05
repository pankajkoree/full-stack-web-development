// first approach to sort the element in descending order
class SelectionSort {
    data;
    minItem;
    constructor() {
        this.data = [45, 67, 23, 77, 98, 99, 12, 56];
    }

    selection() {
        let data = this.data;
        for (let i = 0; i < data.length; i++) {
            this.minItem = i;
            for (let j = i + 1; j < data.length; j++) {
                if (data[j] > data[this.minItem]) {
                    this.minItem = j;
                }

            }
            let temp = data[this.minItem];
            data[this.minItem] = data[i];
            data[i] = temp;
        }
    }
}

ob = new SelectionSort();
ob.selection();
console.log(ob.data);