// using recursion to reverse the array
let arr = [46, 24, 78, 23];
document.write("Before reversig : ", arr, "<br>");
let temp;
function rec_fun(arr, start, end) {
  if (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    rec_fun(arr, start + 1, end - 1);
  }
}

rec_fun(arr, 0, arr.length - 1);
document.write("After reversing", arr);

// default method for recursion
//console.log(arr.reverse());
