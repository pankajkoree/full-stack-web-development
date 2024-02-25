//implicit typecasting

//for string
//anything with string gets concatenated
let result = '3' + 2;
document.getElementById("imp_cast1").innerHTML = "concatenation of 3 and 2 is "+result;

let name_ = "pankaj";
document.getElementById("imp_cast2").innerHTML = "the concatenation of name and number "+name_ + 2;



//for number
//only number and number i.e integer performs operations not concatenation
// subtraction on two string number where auto treated as number
let re = "4" - "5";
document.getElementById("imp_cast3").innerHTML = re;

// here due to stringfloat and integer, it gets concatenated
let res = "5.77" + 3;
document.getElementById("imp_cast4").innerHTML = res;

// here stringfloat is explicitly converted into float and then implicity operations are performed
let rest_ = parseFloat("6.77")+3;
document.getElementById("imp_cast5").innerHTML = rest_;



//non-numeric string results in NaN during operation except concatenation in (-,*,/)
var non_numeric_str = "Hello" - "World!";
document.getElementById("imp_cast6").innerHTML = "Hello - World! gives "+non_numeric_str;
var non_numeric_str2 = "Hello" * "World!";
document.getElementById("imp_cast7").innerHTML =  "Hello * World! gives "+non_numeric_str2;
var non_numeric_str3 = "Hello" / "World!";
document.getElementById("imp_cast8").innerHTML =  "Hello / World! gives "+non_numeric_str3;


//boolean conversion to Number
let bool_val;
bool_res = 5 + true;
document.getElementById("imp_cast9").innerHTML = bool_res;

bool_res2 = 5 * true;
document.getElementById("imp_cast10").innerHTML = bool_res2;

bool_res3 = 5 / false;
document.getElementById("imp_cast11").innerHTML = bool_res3;

//*********************************************//

//explicit casting

let name2 = "hello";
let i = "";
i = Number(i);
document.getElementById("exp_cast1").innerHTML = name2 + " "+i;