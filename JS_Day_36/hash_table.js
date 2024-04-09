// object - hash table
document.write("<hr>");
document.write("<hr>");
document.write("<b><i> <h4> 1. object - hash table </h4> </i></b>");
Employee1_details = {
    Name: "pankaj",
    Age: 23,
    Country: "Nepal"
};

document.write("<hr>");
// getting only the name from the object
document.write("<b> Accessing only the name from the object : </b> " + Employee1_details.Name)

document.write("<hr>");

//  Accessing all the values with their key from the object 
document.write("<b> Accessing all the values with their key from the object : </b> <br>");
for (i in Employee1_details) {
    document.write(i + " : " + Employee1_details[i] + "<br>");
}

document.write("<hr>");

// accessing all the key value pair, using the default property i.e entries

document.write(" <b> accessing all the key value pair, using the default property i.e entries :  </b> " + Object.entries(Employee1_details));

document.write("<hr>");

// accessing only the key
document.write(" <b> accessing only the key </b> :  " + Object.keys(Employee1_details))

document.write("<hr>");

// adding some property to already existing object

Employee1_details.course = "BTCS";
document.write(" <b> adding some property to already existing object </b>  <br>");
for (i in Employee1_details) {
    document.write(i + " : " + Employee1_details[i] + "<br>");
}

document.write("<hr>");
document.write("<hr>");

document.write("<b><i> <h4> 2. Object in Array </h4> </i></b>");
document.write("<hr>");

// object in array
Employee = [Employee1_details];

Employee2_details = {
    Name: "Rajan",
    Age: 20,
    Country: "Nepal"
};
Employee3_details = {
    Name: "Amit",
    Age: 21,
    Country: "Nepal"
};

// pushing object to array
Employee.push(Employee2_details, Employee3_details);

for (i in Employee) {
    console.log(Employee[i]);

}
