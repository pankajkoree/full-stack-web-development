let data1 = [34, 67, 12, 77, 90];
let data2 = [45, 78, 22, 11, 65];
let data3 = [];

for (let i = 0; i < data1.length; i++) {
  data3[i] = data1[i];
}
//console.log(data3);

for (let j = 0; j < data2.length; j++) {
  data3[data1.length + j] = data2[j];
}
console.log(data3);
