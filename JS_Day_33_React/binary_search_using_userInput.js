let Data = [3, 6, 7, 34, 56, 58, 62, 66, 78, 88, 90, 92];

function search() {
    let element = parseInt(document.getElementById("element").value);
    let start = 0;
    let end = Data.length - 1;
    let position = undefined;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (Data[mid] === element) {
            position = mid;
            break;
        } else if (Data[mid] < element) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    if (position !== undefined) {
        console.log(element + " found at position " + (position + 1));
        console.log("Happy coding ❤️");
    } else {
        console.log("sorry not found 😭");
    }
}
