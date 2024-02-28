while_val = document.getElementById("while_loop_");

let val_ = "";
let i = 1;
while (i <= 100) {
  val_ += "<br>"+i;
  i++;
}
while_val.innerHTML = val_;