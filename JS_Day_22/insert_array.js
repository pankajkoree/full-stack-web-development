let data_array = [67, 89, 35, 12, 5, 34, 55];
let new_element = 72;
let position = 2;

// inserting element at specific position without using predefined function
document.write("The original data elements of array : ", data_array, "<br>");
for (let i = data_array.length - 1; i >= 0; i--) {
  if (i >= position) {
    data_array[i + 1] = data_array[i];
    if (i == position) {
      data_array[i] = new_element;
    }
  }
}
document.write("The array element after inserting the element : ", data_array);
document.write("<hr>");
document.write("<hr>");

// user_input inserting element

function insert_element() {
  const inp_position = document.getElementById("inp_position").value;

  const inp_element = document.getElementById("inp_element").value;

  let data = [12, 23, 45, 67, 89];
  document.getElementById("bf").innerHTML = "Before : " + data;
  if (inp_position < 0) {
    document.getElementById("af").innerHTML = "position is less than zero";
  } else if (inp_position > data.length) {
    document.getElementById("af").innerHTML = "index out of range";
  } else {
    for (let i = data.length - 1; i >= 0; i--) {
      if (i >= inp_position) {
        data[i + 1] = data[i];
        if (i == inp_position) {
          data[i] = inp_element;
        }
      }
    }
    document.getElementById("af").innerHTML = "After : " + data;
  }
}

// using the default js function
// using splice()
let data = [12, 23, 45, 67, 89];
data.splice(2, 0, 99);
document.getElementById("def_insert_method").innerHTML =
  "after inserting : " + data;
