// Using for loops
function sortLowToHigh(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let min = arr[i]
                arr[i] = arr[j]
                arr[j] = min
            }
        }
    }
    return arr
}

// Using array sort method (preferred)
function sortLowToHigh(arr) {
    arr.sort((a, b) => a - b)
    return arr
}


console.log(sortLowToHigh([20, 40, 10, 30, 50, 10])) // -> [10, 10, 20, 30, 40, 50]
console.log(sortLowToHigh([5, 10, 0, -5])) // -> [-5, 0, 5, 10]
console.log(sortLowToHigh([3, 2, 1, 0])) // -> [0, 1, 2, 3]