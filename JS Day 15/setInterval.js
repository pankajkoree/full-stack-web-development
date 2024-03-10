setInterval(clock, 1000);

function clock() {
  let clock_ = new Date();
  document.getElementById("setInterval").innerHTML =
    clock_.getHours() + ":" + clock_.getMinutes() + ":" + clock_.getSeconds();
}

// changing the background and text color using setInterval

let variable;

//function using setInterval()
function ch_style() {
  //checking if there's already an setInterval

  if (!variable) {
    variable = setInterval(t_b, 1000);
  }
}

function t_b() {
  let ele = document.getElementById("whole_content");

  ele.className = ele.className === "start" ? "stop" : "start";
}

function stop_style() {
  clearInterval(variable);

  variable = null;
}

document.getElementById("start").addEventListener("click", ch_style);

document.getElementById("stop").addEventListener("click", stop_style);
