// lexical function
function outerfunction() {
  let names = "variable declared at outer function";

  function innerfunction() {
    document.getElementById("lex_scoping").innerHTML =
      "Implementing lexical scoping in innerfunction which means the inner function can use the variable and methods of outer function." +
      "<br>" +
      names;
  }
  innerfunction();
}

outerfunction();

//closure function

function outer_clouser(){
  let outer_var = "Closure variable in outer function";

  function inner_closure(){
    document.getElementById("closure").innerHTML = outer_var;
  }

  return inner_closure;
}

let closure_fun = outer_clouser();
closure_fun();
