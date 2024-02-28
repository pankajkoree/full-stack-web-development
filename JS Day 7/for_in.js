let name_ = "pankaj";

disp_var = document.getElementById("for_in");
iterate = "";
for(let i in name_){
    iterate += "<br>"+name_[i];
}
disp_var.innerHTML = iterate;