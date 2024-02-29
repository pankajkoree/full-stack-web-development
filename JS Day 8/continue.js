cont_ = document.getElementById("continue");

continue_s = "";

for (let i = 1; i <= 10; i++) {
  if (i == 6) {
    continue;
  }
  continue_s += i + "<br>";
}

cont_.innerHTML = continue_s;
