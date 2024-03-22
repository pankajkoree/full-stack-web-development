const p_ = document.createElement("p");
p_.id = "search";

ele_ = document.getElementsByClassName("adding");

//document.ele_.appendChild(p_);
// searching element in array
let data = [23, 67, 87, 33, 55];
let elem = 33;
for (let i = 0; i <= data.length - 1; i++) {
  if (data[i] == elem) {
    if (data[i] == elem) {
      document.getElementById("search").innerHTML =
        "Search element found at position : " + (i + 1);
        break;
    }
  }
}

//through user input
function search_ele() {
  let data2 = [23, 67, 87, 33, 55];
  let elem2 = Number(document.getElementById("get_user_value").value);
  //console.log(typeof elem2);
  for (let i = 0; i <= data2.length - 1; i++) {
    if (data2[i] == elem2) {
      document.getElementById("search2").innerHTML =
        "Search element found at position : " + (i + 1);
        break;
    } else {
      document.getElementById("search2").innerHTML =
        "Search element not found in the array";
    }
  }
}
