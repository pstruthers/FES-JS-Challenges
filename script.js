// Using a for loop
function convertToZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr
}

// Using array fill
function convertToZeros(arr) {
    return new Array(arr.length).fill(0)
}

// Using array map
function convertToZeros(arr) {
    return arr.map(element => 0)
}



console.log(convertToZeros([5, 100, 0])) // -> [0, 0, 0]
console.log(convertToZeros([12])) // -> [0]
console.log(convertToZeros([1, 2, 3, 4, 5])) // -> [0, 0, 0, 0, 0]