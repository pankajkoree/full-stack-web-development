// creating a map using new Map()

let student_ID = new Map([
  ["Pankaj", 46],
  ["Samir", 66],
  ["Sid", 1],
  ["Nona", 99],
]);

document.write(student_ID, "<br/>");
console.log(student_ID);

// adding the elements in the existing map using set()

student_ID.set("Shen Yue", 32);
document.write(student_ID, "<br/>");
console.log(student_ID);

// getting the value from the map using the key

document.write("The value of Nona in Map : ", student_ID.get("Nona"), "<br/>");

// Getting the number of elements in Map using size property
document.write(
  "The total number of elements in Map is ",
  student_ID.size,
  "<br/>"
);

//removing the element from the Map using delete()
document.write(student_ID.delete("Nona"), "<br/>");
console.log(student_ID);

//checking the value if it exist in the Map using has()
document.write(student_ID.has("Nona"), "<br/>"); // it returns false as Nona has been deleted once

document.write(student_ID.has("Pankaj"), "<br/>"); // it returns true as Pankaj is present in Map

// iterating over each element in Map using ForEach
let iterated_ID = "";
student_ID.forEach(function (value, key) {
  iterated_ID += key + " : " + value + "<br>";
});
document.write(iterated_ID);

//iterating over each element in function using entries()

let iterated_ID2 = "";
for (let i of student_ID.entries()) {
  iterated_ID2 += i + "<br>";
}

document.write(iterated_ID2);
