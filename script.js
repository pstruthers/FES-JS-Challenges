// Using a for loop
function removeApples(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'Apple') {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// Using array filter
function removeApples(arr) {
    return arr.filter(element => element !== 'Apple')
}



console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple'])) // -> [Banana, Orange]
console.log(removeApples(['Tomato', 'Orange', 'Banana'])) // -> [Tomato, Orange, Banana]
console.log(removeApples(['Banana', 'Orange', 'Apple'])) // -> [Banana, Orange]