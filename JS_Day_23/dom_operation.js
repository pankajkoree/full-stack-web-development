// inserting the elements

//1st way -  ideal way
function ideal_insert(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".list").appendChild(li);
}
ideal_insert("Java");
ideal_insert("Javascript");

//2nd way - optimized way
function optimized_insert(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".list").appendChild(li);
}

optimized_insert("Rust");


//editng the elements
const edit_ = document.querySelector("li:nth-child(2)");
// 1st using innerHTML
//edit_.innerHTML="Ruby";

//2nd way using textcontent
const temp =document.createElement("li");
temp.textContent = "Ruby";
edit_.replaceWith(temp);


//deleting the element
const delLang = document.querySelector("li:last-child");
delLang.remove();