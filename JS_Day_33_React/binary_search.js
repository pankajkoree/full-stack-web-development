let Data = [3, 6, 7, 34, 56, 58, 62, 66, 78, 88, 90, 92];
let element = 58;
let position = undefined;
let start = 0;
let end = Data.length - 1;
function BinarySearch() {

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (Data[mid] == element) {
            position = mid;
            break;
        }
        else if (Data[mid] < element) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    console.log(element+" found at position "+(position+1));
}