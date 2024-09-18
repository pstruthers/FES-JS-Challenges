function calcTime(seconds) {
    let minutes = Math.floor(seconds / 60)
    let secondsRemainder = seconds % 60
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (secondsRemainder < 10) {
        secondsRemainder = '0' + secondsRemainder
    }
    return minutes + ':' + secondsRemainder
}

console.log(calcTime(66)) // -> 01:06
console.log(calcTime(50)) // -> 00:50
console.log(calcTime(300)) // -> 05:00