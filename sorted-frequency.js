function sortedFrequency(arr, target) {
	if (arr[0] > target) return -1
	if (arr[arr.length - 1] < target) return -1

	let first = firstOccuranceOfNum(arr, target);
	let last = lastOccuranceOfNum(arr, target)

	return last - first + 1
}

function firstOccuranceOfNum(arr, target) {
	if (arr[0] === target) {
		return 0;
	} else {
		let leftIndex = 0;
		let rightIndex = arr.length - 1;

		while (leftIndex <= rightIndex) {
			let midIndex = Math.floor((leftIndex + rightIndex) / 2)

			if (arr[midIndex] < target) {
				if (arr[midIndex + 1] === target) {
					return midIndex + 1;
				} else {
					leftIndex = midIndex + 1;
				}
			}

			if (arr[midIndex] > target) {
				rightIndex = midIndex - 1;
			}

			if (arr[midIndex] === target) {
				if (arr[midIndex - 1] < target) {
					return midIndex;
				} else {
					rightIndex = midIndex - 1;
				}
			}
		}
	}
	
}

function lastOccuranceOfNum(arr, target) {
	if (arr[arr.length - 1] === target) {
		return arr.length - 1;
	} else {
		let leftIndex = 0;
		let rightIndex = arr.length - 1;

		while (leftIndex <= rightIndex) {
			let midIndex = Math.floor((leftIndex + rightIndex) / 2);

			if (arr[midIndex] < target) {

			}
			if (arr[midIndex] > target) {
				rightIndex = midIndex - 1;
			}
			if (arr[midIndex] === target) {
				if (arr[midIndex + 1] > target) {
					return midIndex;
				} else {
					leftIndex = midIndex + 1;
				}
			}
		}
	}
}

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

module.exports = sortedFrequency