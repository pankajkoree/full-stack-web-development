disp_break = document.getElementById("break");

let val_ = '';

for(let i=1;i<=10;i++){
    val_ +=  i +"<br>";
    if(i == 6)
    break
}
disp_break.innerHTML = val_;