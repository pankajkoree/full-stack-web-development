//assignment operators
let a = 10;

document.getElementById("asgnmnt1").innerHTML =
  "Assigned value to variable a: " + a;

document.getElementById("asgnmnt2").innerHTML =
  "+= operator on variabel a : " + (a + 5);

document.getElementById("asgnmnt3").innerHTML =
  "%= operator on variabel a : " + (a %= 3);

document.getElementById("asgnmnt4").innerHTML = "**= operator of 5 : " + 5 ** 2;

// arithmetic operators
document.getElementById("arithmetic1").innerHTML =
  "The sum of 5 + 6 : " + (5 + 6);

document.getElementById("arithmetic2").innerHTML =
  "The division of 5 by 6 : " + 5 / 6;

document.getElementById("arithmetic3").innerHTML =
  "The ** of 5 and 6 : " + 5 ** 6;

//string operators
document.getElementById("string").innerHTML = "string" + "operators";

//comma operators

let commaElement = document.getElementById("comma");
commaElement.innerHTML = "";

for (let a = 0, b = 5; a <= 5; a++, b--) {
  commaElement.innerHTML += a + ", " + b + "<br>";
}

//ternary operators
tern = document.getElementById("ternary").innerHTML = 2 < 3 ? 2 : 3;
