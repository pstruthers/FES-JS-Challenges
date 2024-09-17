function isLoggedInAndSubscribed(str1, str2) {
    return str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED'
}

console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))