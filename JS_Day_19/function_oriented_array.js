// array with the max length of 5
let array_element = new Array(5);

//sealing the array object which makes the array of fixed size as it's not a default properties of array in JS

if (Object.seal) {
  array_element.fill(undefined);
  Object.seal(array_element);
}

// initializing the elements of array
array_element = [45, 67, 23, 89, 34];

let sizeof_array = array_element.length;
// document.write(sizeof_array);

//insertion operation
function inserting_elem() {
  if (sizeof_array == 5) {
    document.write("Overflow.. <br/> can't insert element.");
  } else {
    array_element.push(68);
  }
}

// deletion operation
function deleting_elem() {
  if (sizeof_array != 0) {
    let pop_elem = array_element.pop();
    document.write(pop_elem);
  } else {
    document.write("Underflow.. <br/> Due to unavailability of elements.");
  }
}

//sorting the array elements
function sorting_elem() {
  document.write("Before sorting : ", array_element, "<br/>");

  document.write("After sorting : ", array_element.sort());
}

// searching the elements
/*
function searching_elem(){
  var search_val = prompt("Search value : ");
  search_val = Number(search_val);
  //document.write(search_val);
  for(let i = 0;i<array_element.length;i++){
    if(search_val==array_element[i]){
      document.write(search_val," found at position ",(i+1));
      break;
    }else{
      document.write(search_val," not found in array");
      break;
    }
  }
}
*/

function searching_elem() {
  var search_val = prompt("Search value : ");
  search_val = Number(search_val);
  // document.write(search_val);
  let found = false;
  for (let i = 0; i < array_element.length; i++) {
    if (search_val === array_element[i]) {
      document.write(search_val, " found at position ", i + 1);
      found = true;
      break;
    }
  }
  if (!found) {
    document.write(search_val, " not found in array");
  }
}

/*
function take_val() {
  
  console.log(operation_num);
  return operation_num;

}
*/

function array_op() {
  operation_num = document.getElementById("op_num").value;
  operation_num = Number(operation_num);
  //console.log(typeof operation_num);
  switch (operation_num) {
    case 1:
      document.write("Insertion operation <br/>");
      inserting_elem();
      break;

    case 2:
      document.write("Deletion operation <br/>");
      deleting_elem();
      break;
    case 3:
      document.write("Sorting the elements <br/>");
      sorting_elem();
      break;
    case 4:
      document.write("Searching the elements <br/>");
      searching_elem();
      break;
  }
}

/*
function array_op() {
  try {
    
    }
  } catch (e) {
    console.log(e.message);
  }
}
*/
