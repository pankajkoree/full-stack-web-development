// class LinearSearch {
//     Data;
//     element;

//     constructor() {

//         this.Data = [12, 33, 14, 15, 25, 55, 67, 89];

//     }

// search() {
//     this.element = document.getElementById("element").value;
//     for (let i = 0; i < this.Data.length; i++) {
//         if (this.Data[i] == this.element) {
//             return i;
//         }
//     }
//     return -1;
// }
// }

// ob = new LinearSearch();
// let position = ob.search(this.element);

// if (position != -1) {
//     console.log(ob.element + " found at position " + (position + 1));
// } else {
//     console.log("not found");
// }

let Data = [12, 33, 14, 15, 25, 55, 67, 89];

function search() {
    let element = parseInt(document.getElementById("element").value);
    let position = -1;
    for (let i = 0; i < Data.length; i++) {
        if (Data[i] === element) {
            position = i;
            break;
        }
    }
    if (position !== -1) {
        console.log("Element found at position:", position);
    } else {
        console.log("Element not found.");
    }
}
