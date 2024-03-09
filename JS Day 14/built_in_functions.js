// uppercase conversion

// .toUpperCase() converts usual string to uppercase
let myname = "whatthehellismyname";
document.getElementById("fun1").innerHTML = "myname is converted in uppercase : "+(myname.toUpperCase());

// getting the Date using Date()

document.getElementById("fun2").innerHTML = "Getting complete date and time : "+Date();

//getting cube root
document.getElementById("fun3").innerHTML = "Cube root of 8 : "+Math.cbrt(8);

//getting length of a string
let names_ = "pankaj";
document.getElementById("fun4").innerHTML=
"length of the names_ varibale is : "+names_.length;

//pushing element in array
let n_student = ['pk','ak','dk']
n_student.push("new_name");

document.getElementById("fun5").innerHTML = "pushed element into array is : "+n_student[n_student.length-1];

n_student.pop();    // pop out the last element
document.getElementById("fun6").innerHTML = "The array value after popping out the element is : "+n_student;

