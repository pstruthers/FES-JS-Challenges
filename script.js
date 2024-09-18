function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
         sum += arr[i]
    }
    return sum
}

console.log(arrSum([2, 2, 2]))
console.log(arrSum([100, 200, 500]))
console.log(arrSum([0, -5, -10]))