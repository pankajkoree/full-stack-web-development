// callback function
function called_function(values) {
  document.getElementById("callback").innerHTML = values;
}

// callback function used as argument in main function
function main_function(fname, lname, callback_fun) {
  let _names = fname + " " + lname;
  callback_fun(_names);
}

main_function("tony", "stark", called_function);
