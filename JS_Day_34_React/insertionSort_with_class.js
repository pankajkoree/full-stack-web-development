class InsertionSort {
    data;
    current;
    constructor() {
        this.data = [45, 67, 23, 77, 98, 99, 12, 56];
    }
    insSorting() {
        let data = this.data;
        for (let i = 1; i < data.length; i++) {
            this.current = data[i];
            let j = i - 1; // Define j as a local variable
            while (j >= 0 && data[j] > this.current) {
                data[j + 1] = data[j];
                j = j - 1;
            }
            data[j + 1] = this.current;
        }
    }
}

const ob = new InsertionSort();
ob.insSorting();
console.log(ob.data); 
