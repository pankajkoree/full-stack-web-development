data_type = document.getElementById("if_else_");

let var_value = prompt("Enter the variable value : ");
data_type_ = typeof var_value;
if(data_type_=="string"){
    data_type.innerHTML = "the entered value is String data type";
}
else if(data_type_ == "number"){
    data_type.innerHTML = "the entered value is Number data type";
}
else{
    data_type.innerHTML = "Unable to determine the data type";
}