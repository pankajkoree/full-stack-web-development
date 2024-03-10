//settimeout(function_name,time)

setTimeout(fun_to_called, "5000");    //righnow it is implicitly converting string number into number but it's not a proper way to use rather use Number

function fun_to_called() {
  document.getElementById("set_timeout").innerHTML =
    "Element to be displayed after certain time which has been declared in setTimeout function";
}

function open_google() {
  window.open("https://www.google.co.in/");
}
