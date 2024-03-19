//document.getElementById("traverse").innerHTML = "Traversing the element";
// traverse operation
let data_values = [34, 87, 90, 23, 12, 45, 76];

for (let i = 0; i < data_values.length; i++) {
  document.write(`Array ${i} is ${data_values[i]} <br>`);
}

// getting the element with index
function getElement() {
  index = Number(document.getElementById("elem").value);
  if (index < 0) {
    alert("Index value is less than zero");
  } else if (index < data_values.length) {
    alert(data_values[index]);
  } else {
    alert("Index out of range");
  }
}
