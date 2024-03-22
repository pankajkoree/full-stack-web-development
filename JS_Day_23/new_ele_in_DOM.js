// working with already existing elements

//selects the element with class name parent
const parent_ = document.querySelector(".parent");

//display the parent elements
console.log(parent_);

//display the children of the parent element
console.log(parent_.children);

//accessing the 1st element of using index
console.log(parent_.children[1].innerHTML);

//looping throught the each element
for (let i = 0; i < parent_.children.length; i++) {
  console.log(parent_.children[i].innerHTML);
}

//styling the elements
let fst = parent_.children[1];
//fst.style.backgroundColor = "red";
fst.style.color = "green";
fst.style.width = "100px";
fst.style.padding = "10px";
fst.style.textAlign = "center";
fst.style.borderRadius = "10px";
fst.style.border = "10px solid red";
fst.style.fontFamily = "Arial";

//some default property of parent
console.log(parent_.firstElementChild);
console.log(parent_.firstElementChild.innerHTML);
console.log(parent_.lastElementChild);
console.log(parent_.lastElementChild.innerHTML);

//accessing the parent from the child
let ch1 = parent_.children[1];
console.log(ch1.parentElement);

//accessing sibling nodes
console.log(ch1.nextElementSibling);

// getting the nodes
console.log();

document.write("<hr><hr>");

//creating the child nodes dynamically
const div_ = document.createElement("div");
div_.className = "main";
div_.id = Math.floor(Math.random() * 10 + 1); // Math.round can also be used
console.log(div_.id);
div_.setAttribute("title", "dynamic_node");
div_.style.backgroundColor = "red";
div_.innerText = "dynamic node";
let ap_child = document.createTextNode("dynamic");
div_.appendChild(ap_child);
//attaching to the body
document.body.appendChild(div_);
div_.style.color = "white";
div_.style.fontSize = "50px";
div_.style.width = "500px";
div_.style.height = "70px";
div_.style.textAlign = "center";
div_.style.padding = "10px";
div_.style.borderRadius = "5px";
