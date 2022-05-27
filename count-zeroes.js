function countZeroes(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2)
        if ((midIndex === 0) && (arr[midIndex] === 0)) {
            return arr.length
        }
        if (leftIndex === rightIndex) {
            if (arr[midIndex] === 1) {
                return 0
            } else {
                return arr.length
            }
        }
        if ((arr[midIndex] === 1) && (arr[midIndex + 1] === 0)) {
            return (arr.length - 1 - midIndex)
        }
        if ((arr[midIndex] === 1) && (arr[midIndex + 1] === 1)) {
            leftIndex = midIndex + 1
        }
        if ((arr[midIndex] === 0) && (arr[midIndex - 1] === 1)) {
            return (arr.length - midIndex)
        }
        if ((arr[midIndex] === 0) && (arr[midIndex - 1] === 0)) {
            rightIndex = midIndex - 1
        }
    }
    return 0
}

// function countZeroes(arr) {
//     let upper = arr.length - 1;
//     let lower = 0;
//     let mid;
//     while (upper >= lower) {
//       	mid = Math.floor((upper + lower) / 2);
//       	if (upper === lower) {
//         	if (arr[upper] === 1) {
//         		return 0;
//         	} 
// 			else {
//         		return arr.length;
//         	}
//       	}
//       	if (arr[mid] === 0) {
//         	if (arr[mid - 1] === 1) {
//         		return arr.length - mid;
//         	}
//             upper = mid - 1;
//       	} 
// 		else {
//         	if (arr[mid + 1] === 0) {
//         		return arr.length - mid - 1;
//         	}
//         	lower = mid + 1;
//       	}
//     }
// }

// function countZeroes(arr) {
//     // add whatever parameters you deem necessary - good luck!
//     let firstZero = findFirst(arr)
//     if (firstZero === -1) return 0;
  
//     return arr.length - firstZero
// }
  
// function findFirst(arr, low = 0, high = arr.length - 1) {
//     if (high >= low) {
//       let mid = low + Math.floor((high - low) / 2)
//       if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
//         return mid;
//       } else if (arr[mid] === 1) {
//         return findFirst(arr, mid + 1, high)
//       }
//       return findFirst(arr, low, mid - 1)
//     }
//     return -1;
// }

module.exports = countZeroes