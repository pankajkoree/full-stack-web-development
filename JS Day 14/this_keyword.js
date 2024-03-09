// this in a method
let emp = {
  fName: "pankaj",
  lName: "kori",
  age: 23,
  name: function () {
    return this.fName + " " + this.lName;
  },
};

document.getElementById("this_1").innerHTML =
  "Emploee's fullname : " + emp.name();

// using this in strict mode also refers as global object

function strict_fun() {
  "use strict";
  let x = 5;
  return this;
}

//Number.prototype.strict_fun = strict_fun;

document.getElementById("this_2").innerHTML =
  "gives output as undefined : " + typeof strict_fun();

// this as global object
let y = this;

document.getElementById("this_3").innerHTML =
  "When used alone, this refers to the global object.Because this is running in the global scope.In a browser window the global object is [object Window]: ------------ " +
  y;

// this keyword in a function

function use_this() {
  return this;
}

document.getElementById("this_4").innerHTML =
  "In a function, the global object is the default binding for this.In a browser window the global object is [object Window] ----------------" +
  use_this();

// this keyword in arrow function
const globalObject = this;
const foo = () => this;

document.getElementById("this_5").innerHTML = foo() === globalObject; // will give output as false if we use let instead of const

// call() in this keyword in js

let Emploee = {
  EmpName: function () {
    return this.emp_fname + " " + this.emp_lname;
  },
};

let emp1 = {
  emp_fname: "Gulshan",
  emp_lname: "Sahu",
};

let emp2 = {
  emp_fname: "Samir",
  emp_lname: "Paswan",
};

document.getElementById("this_6").innerHTML = Emploee.EmpName.call(emp2);

// apply() in this keyword in js

let people = {
  pple: function (age, course) {
    return this.ppl_fname + " " + this.ppl_lname + " " + age + " " + course;
  },
};

let ppl1 = {
  ppl_fname: "rahul",
  ppl_lname: "nigam",
};

let ppl2 = {
  ppl_fname: "len",
  ppl_lname: "ovo",
};

document.getElementById("this_7").innerHTML = people.pple.apply(ppl1, [
  22,
  "BTCE",
]);

// bind() in this keyword in js
// also refers as function borrowing
let bind_var = {
  bind_fname: "charlie",
  bind_lname: "chopra",
  bind_name: function () {
    return this.bind_fname + " " + this.bind_lname;
  },
};

let new_name = {
  bind_fname: "charles",
  bind_lname: "lee",
};

let _name = bind_var.bind_name.bind(new_name);

document.getElementById("bind_use").innerHTML = _name();
