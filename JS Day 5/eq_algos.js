function isLooselyEqual(val1, val2) {
  return val1 == val2;
}
var a = 5;
var b = 5;
document.getElementById("is_loosely1").innerHTML = isLooselyEqual(a, b);
