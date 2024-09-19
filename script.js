async function firstSixIncomplete() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  const incompleteTodos = data.filter(element => !element.completed).slice(0, 6);
  console.log(incompleteTodos);
}

firstSixIncomplete();