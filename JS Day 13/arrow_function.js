// this is shorthand function of usual sum function
let sum = (x, y) => {
  return x + y;
};

document.getElementById("arrow_fun").innerHTML =
  "The sum of two numbers :  " + sum(1, 3);

const getting_length = ["apple", "ball", "cat", "dog", "elephant"];

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

document.getElementById("arrow_fun2").innerHTML=materials.map((material) => material.length);