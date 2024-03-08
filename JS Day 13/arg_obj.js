// argument object i.e argumnet[index]
function potentional_energy(mass, gravity, height) {
  let pot_energy = mass * gravity * height;
  document.getElementById("arg_obj1").innerHTML =
    "Value of mass : " + arguments[0];
  document.getElementById("arg_obj2").innerHTML =
    "Value of gravity : " + arguments[1];
  document.getElementById("arg_obj3").innerHTML =
    "Value of height :  " + arguments[2];

  document.getElementById("pot_ener").innerHTML =
    "Potentioal Energy :  " + pot_energy;
}

potentional_energy(12,9.8,14)