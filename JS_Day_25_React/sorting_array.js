// sorting the array using bubble sort
let data = [66, 23, 78, 12];
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
    console.warn(data);
  }
}

//console.log(data);
