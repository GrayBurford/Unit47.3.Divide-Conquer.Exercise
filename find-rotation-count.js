function findRotationCount(arr) {
    if (arr[0] < arr[arr.length - 1]) return 0;

    let breakPoint = findBreakPoint(arr)

    return breakPoint + 1;
}

function findBreakPoint (arr) {
    // Arr has only 1 value, or array is already in consecutive order
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;

    let start = 0;
    let end = arr.length -1;

    while (start <= end) {
        let midIdx = Math.floor((start+end)/2);
        if (arr[midIdx] > arr[midIdx+1]) {
            return midIdx;
        }
        else if ( arr[start] <= arr[midIdx]) {
            start = midIdx + 1;
        }
        else {
            end = midIdx - 1;
        }
    }
}

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

module.exports = findRotationCount