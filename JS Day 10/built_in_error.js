// Built-in error or error constructors

// 1. EvalError
try {
  throw new EvalError("pankaj");
} catch (e) {
  // document.getElementById("eval_error").innerHTML = e.name;  // gives output as EvalError

  // document.getElementById("eval_error").innerHTML = e.message;  // prints pankaj

  // document.getElementById("eval_error").innerHTML = e instanceof EvalError;  //gives true as ouput

  document.getElementById("eval_error").innerHTML = e.stack; //stack of the error
}

// 2. ReferenceError
try {
  let a = undefinedVariable;
} catch (e) {
  //document.getElementById("refrence_error").innerHTML = e.name;

  document.getElementById("refrence_error").innerHTML = e.stack;
}

// InternalError
try {
  function loop(x) {
    if (x >= 100000) return;

    // do stuff
    loop(x + 1);
  }
  loop(0);

  // InternalError: too much recursion
} catch (e) {
  document.getElementById("internal_error").innerHTML = e.stack;
}

// SyntaxError
try {
  throw new SyntaxError("Hello");
} catch (e) {
  document.getElementById("syntax_error").innerHTML = e.stack;
}


//TypeError
try{
    String.f(1);
}catch(e){
    document.getElementById("type_error").innerHTML = e.stack;
}

//URIError
try{
    decodeURIComponent("%");
}catch(e){
    document.getElementById("uri_error").innerHTML = e.stack;
}