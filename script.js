// Using a for loop
function filterOutFalsy(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// Using array filter
function filterOutFalsy(arr) {
    return arr.filter(element => element)
}



console.log(filterOutFalsy(["", [], 0, null, undefined, "0"])) // -> [[], "0"]
console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false])) // -> [Tomato, Orange, Banana]