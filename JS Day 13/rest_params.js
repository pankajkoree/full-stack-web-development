function sum(...theargs){
let t_interest = 0;
for(let i of theargs){
    t_interest += i;
    document.getElementById("rest_params").innerHTML = "total sum of the arguments passed in function which can be indefinite in count : "+t_interest;
}

}
sum(2,4,5,7,8,9);   //arguments can be unlimited 