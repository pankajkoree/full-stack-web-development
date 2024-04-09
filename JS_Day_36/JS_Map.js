// JS map data structure

let data = new Map([
    ["name", "pankaj"],
    ["age", 22]
]);

// display the map key and values
console.warn(data);


// setting a new key and value in existing map
data.set("country", "nepal");
console.warn(data);

// display the length/size of the map
console.warn(data.size);

//  deleting the key and value from the existing map
data.delete("name");
console.warn(data);

// finding whether the key exist or not?
//console.warn(data.has("age"));

if (data.has("age") == true) {
    console.warn(data.get("age"));
}
else {
    console.warn("not found");
}

// checking the type of map
console.warn(typeof data);


// checking the instance of Map

if (data instanceof Map == true) {
    console.warn(data);
} else {
    console.warn("sorry, its not an instance of Map");
}

// using forEach()
data.forEach((key, value) => {
    console.warn(key, value);
})

// getting the entries

for (let x of data.entries()) {
    console.warn(x);
}


// getting the keys

for (let x of data.keys()) {
    console.warn(x);
}

// getting the values

// for(const i of data.values()){
//     console.warn(i);
// }
for (let i of data.values()) {
    console.warn(i);
}