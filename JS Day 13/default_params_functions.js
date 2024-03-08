// function with parameters as some of the default params
function sum(a,b=9){
    document.getElementById("fun1").innerHTML = "The sum of two numbers are : " +(a+b);
}
sum(5,6);   //if value of b isn't provided it will calculate as b = 9

function gravity(m,g=9.8){
    document.getElementById("fun2").innerHTML = "Force calculated using mass and gravity : "+(m*g);
}

gravity(12,10);