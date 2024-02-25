//converting number form string type to number
//string with a number to null
var a = "15";
document.getElementById("demo").innerHTML =
  "String number into number " + Number(a);

//converting from null string to number
var str_null = "";
document.getElementById("demo2").innerHTML =
  "String number into number " + Number(str_null);

//coverting from string to number which gives the output as NaN and if the number is like 112 23 giving the space also throws NaN
let name = "ab";
document.getElementById("demo3").innerHTML =
  "String number into number " + Number(name);

//************************************************************************************************* *//

// converting integer to float,actually there isno such method, but it can be achieved from toFixed() as given below
var num2 = 11;
document.getElementById("float_num").innerHTML =
  "integer converted into float " + parseFloat(num2).toFixed(2);

//converting a string float into float
var num3 = "15.66";
document.getElementById("float_num2").innerHTML =
  "integer converted into float " + parseFloat(num3);

//converting a null string into float gives a NaN
var str_null2 = "";
document.getElementById("float_num3").innerHTML =
  "String number into number " + parseFloat(str_null2);

//converting a string into float gives NaN
var name2 = "pk";
document.getElementById("float_num4").innerHTML =
  "integer converted into float " + parseFloat(name2);

//toExponential()	Returns a string, with a number rounded and written using exponential notation.
var exponenting_num = 12.45;
document.getElementById("float_num5").innerHTML =
  "integer converted into float " + exponenting_num.toExponential();

// toPrecision()  toPrecision() returns a string, with a number written with a specified length almost same as toFixed()
var rounding_num = 12.4575678678998;
document.getElementById("float_num6").innerHTML =
  "integer converted into float " + rounding_num.toPrecision(5);

//************************************************************************************************* *//

// converting a non-string to string
var non_str = 11;
ele1 = document.getElementById("string_");
ele1.innerHTML = "Non string to string " + String(non_str);

//another way
//ele1 = document.getElementById("string_");
//ele1.innerHTML = "Non string to string " + non_str.toString();

//************************************************************************************************* *//

// getting the type of some above variables
// num3 is already an string float lets check its data type
document.getElementById("type_of").innerHTML =
  "num3 is already an string float lets its data type --- " + typeof num3;

// non_str is integer  lets check its type
document.getElementById("type_of2").innerHTML =
  "non_str is integer  lets check its type ---- " + typeof non_str;

// again lets check the converted non-strting converted to string
document.getElementById("type_of3").innerHTML =
  "non_str is integer  lets check its type ----  " +
  typeof ele1 +
  " ------ it gives object as data type coz instances of built-in objects like Number, String, Array, etc., it will return object ,    This behavior is due to how JavaScript handles data types and values. In JavaScript, everything that is not a primitive data type (such as numbers, strings, booleans, null, and undefined) is considered an object.";
