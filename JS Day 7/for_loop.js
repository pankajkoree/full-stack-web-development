for_var = document.getElementById("for_loop_");
let for_var_ = 1;
for_val = "";
for (for_var_ = 1; for_var_ <= 100; for_var_++) {
    for_val += "<br>"+for_var_;
}
for_var.innerHTML = for_val;