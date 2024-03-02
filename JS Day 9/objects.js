// creating the objects

/*
Using an Object Literal
This is the easiest way to create a JavaScript Object.

Using an object literal, you both define and create an object in one statement.

An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
*/

let employee = {
  id: 111,
  firstname: "pankaj",
  lastname: "kori",
  age: 23,
  course: "BTCS",
};
// adding it before, using it is the way to add

employee.height = "5ft 5inch";

document.getElementById("object1").innerHTML =
  "Id : " +
  employee.id +
  "<br>" +
  "Name : " +
  employee.firstname +
  " " +
  employee.lastname +
  "<br>" +
  "Age : " +
  employee.age +
  "<br>" +
  "Height : " +
  employee.height;

// adding it here, makes it undefined
//employee.height = "5ft 5inch";

// using the new Object()
/*
Using the JavaScript Keyword new
The following example create a new JavaScript object using new Object()
*/
/*
let bank_details = new {
    id : 112,
    bankname : "SBI",
    balance : 23000,
    withdraw : 12000
}
*/

let bank_details = new Object();
bank_details.bankname = "SBI";
bank_details.balance = 23000;
bank_details.withdraw = 12000;

document.getElementById("object2").innerHTML =
  "Bank name : " +
  bank_details.bankname +
  "<br>" +
  "Balance : " +
  bank_details.balance +
  "<br>" +
  "Withdraw amount : " +
  bank_details.withdraw;
