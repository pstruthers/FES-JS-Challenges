function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(getMax([5, 100, 0])) // -> 100
console.log(getMax([12, 10, -20])) // -> 12
console.log(getMax([-300, -100, -200])) // -> -100