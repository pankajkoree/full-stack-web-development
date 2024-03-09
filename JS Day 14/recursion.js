function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
document.getElementById("recursion1").innerHTML ="Factorial is "+(factorial(5));
