// head and tail recursion

function print_(num) {
  //console.log(num); //head recursion
  if (num > 0) {
    print_(num - 1);
  }
  console.log(num); // tail recursion
}

let data = 5;
print_(data);
