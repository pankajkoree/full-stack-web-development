// indirect recursion
//its nothing but a process of 1st function into 2nd and 2nd function into 1st
let stored_pwd = "justlogin";
let password;
function login() {
  if (password == stored_pwd) {
    console.log("Successful login");
  } else {
    getpwd();
  }
}

function getpwd() {
  password = prompt("enter the password: ");
  login();
}

login();
