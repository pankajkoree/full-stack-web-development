// strict mode variables
"use strict";
let pi = 3.14;

function use_pi(r) {
  return pi * r * r;
}

document.getElementById("use_strict1").innerHTML = "calculating area using strict mode variables: "+(use_pi(5));


// strict mode functions
"use strict"
function strict_fun(r){
    return pi*r*r;
}

document.getElementById("use_strict2").innerHTML = "Area of circle using strict mode function : "+strict_fun(6);