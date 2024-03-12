class using_cls{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

let ob1 = new using_cls("pankaj",2021);

let ob2 = new using_cls("rahul",2022);

document.getElementById("class_").innerHTML = ob1.name + " " + ob2.name;