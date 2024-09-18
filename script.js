// Using a for loop
function convertToBoolean(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(!!arr[i])
    }
    return newArr
}

// Using array map
function convertToBoolean(arr) {
    return arr.map(element => !!element)
}


console.log(convertToBoolean([500, 0, "Paige", "", []])) // -> [true, false, true, false, true]