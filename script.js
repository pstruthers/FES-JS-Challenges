
function showRating(rating) {
    let string = ''
    for (let i = 1; i <= Math.floor(rating); i++) {
        string += "*"
        if (i !== Math.floor(rating)) {
            string += ' '
        }
    }
    if (rating === 0.5) {
        string += '.'
    }
    else if (!Number.isInteger(rating)) {
        string += ' .'
    }
    return string
}


console.log(showRating(3)) // -> * * *
console.log(showRating(4.5)) // -> * * * * .
console.log(showRating(0.5)) // -> .