//Bitwsie AND
bw = document.getElementById("bitwise_and");

bw.innerHTML = "Bitwise AND of 15 & 7 : " + (15 & 7);

//Bitwise OR
document.getElementById("bitwise_or").innerHTML =
  "Bitwise OR of 15 | 7 : " + (15 | 7);

//Bitwise XOR
document.getElementById("bitwise_xor").innerHTML =
  "Bitwise XOR of 9 ^ 7 : " + (9 ^ 7);

//Left shift (<<) it adds 15 i.e 1111<2 i.e 111100
document.getElementById("left_shift").innerHTML =
  "Left shift of 15 << 2 : " + (15 << 2);

//Right shift(>>) may or maynot with sign
// without sign same as + i.e 15 i.e 1111>>2 i.e. 11 = 3
document.getElementById("right_shift1").innerHTML ="positive right shift of 15 >> 2 : " +(15 >> 2);


// negative right shift
document.getElementById("right_shift2").innerHTML ="positive right shift of -15 >> 2 : " +(-15 >> 2);