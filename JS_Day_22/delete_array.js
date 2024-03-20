// deleting the element from array
let data = [12, 34, 67, 90, 44];
let ele_del_pos = 3;
document.write("before deleting the element from array : " + data + "<br>");

for (let i = ele_del_pos - 1; i < data.length; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
document.write("after deleting the element from array : " + data);

document.write("<hr><hr>");

// with the help of user input position
function del_element() {
  let data_ = [12, 34, 67, 90, 44];
  document.getElementById("bf").innerHTML = "Before deleting the element : "+data_;
  let user_ele_pos = document.getElementById("user_ele_pos").value;
  if (user_ele_pos < 0) {
    document.getElementById("af").innerHTML = "position is less than zero";
  } else if (user_ele_pos > data_.length) {
    document.getElementById("af").innerHTML = "index out of range";
  } else {
    for (let i = user_ele_pos - 1; i < data_.length; i++) {
      data_[i] = data_[i + 1];
    }
    data_.length = data_.length - 1;
    document.getElementById("af").innerHTML =  "after deleting the element : "+data_;
  }
}
