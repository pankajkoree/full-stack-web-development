// self executing function or IIFE (immediately invoked function expression)
(function () {
  let r = 5;
  document.getElementById("iife_1").innerHTML =
    "Area of circle with radius 5 is as : " + Math.PI * (r * r);
})();

// using IIFE to iterate using for loops
(function () {
  let values_ = [];
  for (let i = 1; i <= 5; i++) {
    values_ = values_ + i + "<br>";
    document.getElementById("iife_2").innerHTML = values_;
  }
})();
