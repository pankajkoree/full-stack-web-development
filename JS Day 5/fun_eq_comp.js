// Object.is()
// The Object.is() static method determines whether two values are the same value

document.getElementById("ob_is").innerHTML =
  "Result for 5 & -5 is " + Object.is(5, -5);

document.getElementById("ob_is2").innerHTML =
  "Result for 5 & 5 is " + Object.is(5, 5);

document.getElementById("ob_is3").innerHTML =
  'Result for "5" & 5 is ' + Object.is("5", 5);

document.getElementById("ob_is4").innerHTML =
  "Result for NaN & NaN is " + Object.is(NaN, NaN);

const obj = {};
document.getElementById("ob_is5").innerHTML = " When you compare obj with {}, even though both objects are empty, they are not the same object in memory so it gives the result as " +Object.is(obj, {});
