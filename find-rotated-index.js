function findRotatedIndex(arr, target) {
    let breakPoint = findBreakPoint(arr);
    let start = 0;
    let end = arr.length - 1;

    if (target === arr[breakPoint]) {
        return breakPoint;
    }
    if (target >= arr[0]) {
        end = breakPoint - 1;
    }
    if (target <= arr[arr.length - 1]) {
        start = breakPoint + 1;
    }

    while (start <= end) {
        let midIdx = Math.floor((start + end) / 2)
        let midVal = arr[midIdx]
        if (target < midVal) {
            end = midIdx - 1
        } else if (target > midVal){
            start = midIdx + 1
        } else {
            return midIdx;
        }
    }
    return -1
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

module.exports = findRotatedIndex