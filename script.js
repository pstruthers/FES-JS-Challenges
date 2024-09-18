function falsyOrTruthy(val1, val2) {
    return !val1 ? val1 : val2
}

console.log(falsyOrTruthy(550, 500))
console.log(falsyOrTruthy(false, 100))