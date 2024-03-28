let num1 = 0;
let num2 = 1;
let temp;
for (let i = 0; i < 8; i++) {
  temp = num1 + num2;
  num1 = num2;
  num2 = temp;
  console.log(temp);
}
