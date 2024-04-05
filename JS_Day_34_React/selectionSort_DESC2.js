// second approach to sort the element in descending order
class SelectionSort2 {
    data;
    minItem;
    constructor() {
        this.data = [45, 67, 23, 77, 98, 99, 12, 56];
    }

    selection2() {
        let data = this.data;
        for (let i = data.length-1; i >= 0 ; i--) {
            this.minItem = i;
            for (let j = i - 1; j >= 0; j--) {
                if (data[j] < data[this.minItem]) {
                    this.minItem = j;
                }

            }
            let temp = data[this.minItem];
            data[this.minItem] = data[i];
            data[i] = temp;
        }
    }
}

ob = new SelectionSort2();
ob.selection2();
console.log(ob.data);