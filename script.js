function progressiveSum(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600))