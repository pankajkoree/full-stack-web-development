//array declared with const must be initialized at the time of declaration, otherwise it throws error
// it also has block scope, which means value outside the block could be different
/*
try{
  const array;
  array = [1,2,3];
}
catch(e){
  document.write(e.message);
}
*/

//array declared with var work fine, even if we just declare first, and after initializing it
// it doesn't have the concept of block scope
var vehicle;
vehicle = ["BMW", "AUDI", "Lamborghini", "Mercedes"];

document.write(vehicle,"<br/>");

let sID = [101, "pankaj", 103, 104, 105];

console.log(sID);
// accesing the elements of array
console.log(sID[0] + "\n");

console.log(sID[5]); //by default, while accessing the elements if the index isn't more than the size of the length of the array, it returns undefined

//let access_index = prompt("enter the index : \n");
try {
  if (access_index > sID.length) {
    console.log("Index out of range");
  } else {
    console.log(sID[access_index]);
  }
} catch (err) {
  console.log(err.message);
}

// js array are mutable
sID[2] = 107;
for (let i = 0; i < sID.length; i++) {
  console.log(sID[i]);
}

//array to string conversion
console.log(sID.toString());

// arrays in js are objects
console.log(typeof sID);

//adding array element, of the type objects
sID[5] = new Date();
console.log(sID);

// iterating through each element and making it as lists
let iterate_elem = "<ol>";
for (let i = 0; i < sID.length; i++) {
  iterate_elem += "<li>" + sID[i] + "</li>";
}

document.getElementById("array1").innerHTML = iterate_elem + "<br>";

// pushing value into array using push()
// push places the item at the end of the list just like append in python

var var_pushing = ["A", "B", "C", "D"];
var_pushing.push("A");
document.write(var_pushing);
document.write("<br/>");
//var_pushing.insert(5,"F"); insert is not a function in javascript


// sorting the array elements
document.write("sorted elements : "+var_pushing.sort(),"<br/>");


const number_ = [44,67,87,23,56,12,77];
document.write("sorted elements : "+number_.sort()+"<br/>");

// pop() removes the last element from the array
number_.pop();
document.write("sorted elements : "+number_.sort());

