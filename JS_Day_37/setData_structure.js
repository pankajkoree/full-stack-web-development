// set data structure works almost same as array, but the major difference is that set won't allow duplicate value

let data = new Set(["mehfooz", "pankaj", "rahul"]);
console.log(data);


// adding the new element to exitsting set
data.add("salam");
console.log(data);

// adding a duplicate elements, to check whether set accepts duplicate or not.
data.add("pankaj");
console.log(data);

// using forEach in set
data.forEach(element => {
    console.log(element);
});

// adding value as array
data.add({ age: 23 });

data.forEach(element => {
    console.log(element);
});

// finding whether the key exist or not?
console.log(data.has("PK"));
console.log(data.has("pankaj"));

// finding the length
console.log(data.size);
