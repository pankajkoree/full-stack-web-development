class LinearSearch {
  Data;
  //position;
  element;
  constructor() {
    this.Data = [23, 56, 12, 67, 89, 24];
    this.element = 12;
  }

  search() {
    for (let i = 0; i < this.Data.length; i++) {
      if (this.Data[i] == this.element) {
        //this.position = i + 1;
        //console.log(this.element+" found at position "+this.position);

        return i;
      }
    }
    return -1;
  }
}

ob = new LinearSearch();
let position = ob.search();

if (position != -1) {
  console.log(ob.element + " found at position " + (position + 1));
} else {
  console.log("not found");
}
