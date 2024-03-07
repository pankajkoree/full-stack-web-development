//  using the n follwed by number to make BigInt

bg = document.getElementById("BI");

let x = 48321754795847;
bg.innerHTML ="Value of 48321754795847 : " +x;

document.getElementById("BI2").innerHTML ="type of 48321754795847 : "+(typeof x);

let y = 43847938735n;
document.getElementById("BI3").innerHTML ="type of 43847938735n i.e. y : "+(typeof y);

// Using the BigInt()
let z = BigInt("493213859745");

document.getElementById("BI4").innerHTML ="type of z : "+(typeof z);

