function promise_content(some) {
  document.getElementById("promise").innerHTML = some;
}

let promise_var = new Promise(function (resolved, rejected) {
  let request_var = new XMLHttpRequest();
  //request_var.open("GET", "callback_hell.html");  //if its not commented it will show the loaded file

  request_var.open("GET", "callback_hell.html_"); // for this it will not load the file

  request_var.onload = function () {
    if (request_var.status === 200) {
      resolved(request_var.response);
    } else {
      rejected("File not loaded");
    }
  };
  request_var.send();
});

promise_var.then(
  function (value) {
    promise_content(value);
  },
  function (error) {
    promise_content(error);
  }
);

/*
function myDisplayer(some) {
    document.getElementById("promise").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "callback_hell.html");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
*/
