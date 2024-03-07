//relational operators
ele = document.getElementById("rel_op");
ele.innerHTML = "A > B ? : " + ("A" > "B");

ele2 = document.getElementById("rel_op2");
ele2.innerHTML = "A <= B ? : " + ("A" <= "B");

let dict_ = ["fname", "pankaj", "lname", "kori", "age", 23];

document.getElementById("rel_op3").innerHTML = "checking whether the given index is in the given list ? : "+(0 in dict_);
