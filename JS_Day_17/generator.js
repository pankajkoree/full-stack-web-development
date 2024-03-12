// simple generator
/*
function* generator_() {
  console.log("B 1");
  yield 1;
  console.log("A 1");
  console.log("B 2");
  yield 2;
  console.log("A 2");
  console.log("B 3");
  yield 3;
  console.log("A 3");
}

const gen_ob = generator_();
console.log(gen_ob.next());
console.log(gen_ob.next());
console.log(gen_ob.next());
console.log(gen_ob.next());
*/

//multiple generatar
/*
function* generator_() {
  console.log("B 1");
  yield 1;
  console.log("A 1");
  console.log("B 2");
  yield 2;
  console.log("A 2");
  console.log("B 3");
  yield 3;
  console.log("A 3");
}

const gen_ob = generator_();

console.log(gen_ob.next());
console.log(gen_ob.next());
const gen_ob2 = generator_();
console.log(gen_ob.next());
console.log(gen_ob.next());
*/

// loop case in generator
function* genID() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

//done will be false in infinite and true in case of definite
/*
const obj = genID();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());

const obj2 = genID();

console.log(obj2.next());
console.log(obj2.next());
console.log(obj2.next());
*/
// array using generator
/*
function* generatar(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

const array_ob = generatar([5, 7, 8]);
console.log(array_ob);
console.log(array_ob);
console.log(array_ob);
console.log(array_ob);
*/

function* genID_() {
  let id = 1;
  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const genID_ob = genID_();
console.log(genID_ob.next());

console.log(genID_ob.next(5));
console.log(genID_ob.next(4));

console.log(genID_ob.return(5)); // after the use of return, it stops executing the value further
console.log(genID_ob.throw("Nothing but a error")); // throw error
console.log(genID_ob.next());
