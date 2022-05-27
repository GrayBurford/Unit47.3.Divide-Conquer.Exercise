function findFloor(arr, x) {
    if (x < arr[0]) return -1;
    if (x >= arr[arr.length - 1]) return arr[arr.length - 1];

    let index = binarySearch(arr, x);
    return arr[index];
}

function binarySearch (arr, target) {
    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left+right)/2);

        if (arr[mid] > target) {
            right = mid - 1;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    
    if (arr[right] < target) return right;
    if (arr[left] > target) return left;
}

// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

module.exports = findFloor

// WHILE LOOP CONDITIONALS FROM DANE
// function findFloor(arr, x) {
//     if (x < arr[0]) return -1;
//     if (x >= arr[arr.length - 1]) return arr[arr.length - 1];

//     let index = binarySearch(arr, x);
//     return arr[index];
// }

// function binarySearch (arr, target) {
//     let left = 0;
//     let right = arr.length - 1
//     let mid
//     while (left <= right) {
//         mid = Math.floor((left+right)/2);
//         if (arr[mid] === target || 
//             (arr[mid] < target && mid === arr.length - 1) ||
//             (arr[mid] < target && arr[mid + 1] > target)){
//             return mid;
//         } 
//         else if (arr[mid] > target) {
//             right = mid - 1;
//         } 
//         else {
//             left = mid + 1;
//         }
//     }
// }