ele = document.getElementById("is_strictly_equal_");

function isStrictlyEqual(val1, valu2) {
  return val1 === valu2;
}
val1 = NaN;
val2 = NaN;
ele.innerHTML = isStrictlyEqual(val1, val2);

same_val_zero = document.getElementById("same_value_zero");

function SameValueZero(val3, val4) {
  return val3 === val4;
}
val3 = NaN;
val4 = NaN;
same_val_zero.innerHTML = SameValueZero(val3, val4);
