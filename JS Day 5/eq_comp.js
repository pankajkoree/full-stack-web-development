var a = 5;
var b = "5";
var c = 6;
// comparing the two value with the == equalto operator which should produce true if value is same doesn't matters with the data type
document.getElementById("equal_").innerHTML = a == b;
document.getElementById("equal_2").innerHTML = a == c;

//*******************************//

// comparing the two value with the != equalto operator works inverse of above i.e ==
document.getElementById("not_equal_").innerHTML = a != b;

document.getElementById("not_equal_2").innerHTML = a != c;

//*******************************//

// comparing the two value with the === equalto operator which should produce true if value and the data type is same
let x = 8;
let y = "8";
let z = 8;
document.getElementById("triple_eq_").innerHTML = x === y;

document.getElementById("triple_eq_2").innerHTML = x !== y;

document.getElementById("triple_eq_3").innerHTML = x === z;

document.getElementById("triple_eq_4").innerHTML = x !== z;

//*******************************//

let myname;
let text = "value is missing";
document.getElementById("nullish_??").innerHTML = myname ?? text;

let myname2 = "pankaj";
let text2 = "value is missing";
document.getElementById("nullish_??2").innerHTML = myname2 ?? text2;

//*******************************//

