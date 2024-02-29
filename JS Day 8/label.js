disp_label = document.getElementById("labeled");

label_ = '';

looping: for(let i=1;i<=10;i++){
    if(i==2)
    continue looping;

    label_ += i + "<br>";

    if(i==7)
    break looping;
}
disp_label.innerHTML = label_;