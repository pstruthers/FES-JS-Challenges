// Using an incrementing for loop
function reverseString(string) {
    let stringReverse = ''
    for (let i = 0; i < string.length; i++) {
        stringReverse = string[i] + stringReverse
    }
    return stringReverse
}

// Using a decrementing for loop
function reverseString(string) {
    let stringReverse = ''
    for (let i = string.length - 1; i >= 0; i--) {
        stringReverse += string[i]
    }
    return stringReverse
}

// Using array reverse property
function reverseString(string) {
    return string.split('').reverse().join('') // Convert string to array, reverse array, and convert back to string
}



console.log(reverseString('abc')) // -> cba
console.log(reverseString('Paige')) // -> egiaP
console.log(reverseString('This is cool')) // -> looc si sihT