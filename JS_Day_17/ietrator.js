//iterator function

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let count = 0;

  let rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = {
          value: nextIndex,
          done: false,
        };
        nextIndex += step;
        count++;
        return result;
      }
      return { value: count, done: true };
    },
  };
  return rangeIterator;
}

let iteration_var = makeRangeIterator(1, 10, 3);

let result = iteration_var.next();
while (!result.done) {
  //document.getElementById("iterator").innerHTML = result.value;

  document.write(result.value);
  result = iteration_var.next();
}

(document.getElementById("iterator").innerHTML =
  "Iterated over sequence of size:"),
  result.value;
