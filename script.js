async function postsByUser(userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    const posts = data.filter(element => element.userId === userId)
    console.log(posts)
}

postsByUser(4)