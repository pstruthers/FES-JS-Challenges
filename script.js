function sortHighToLow(arr) {
  return arr.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 30 },
    { id: 2, price: 10 },
    { id: 3, price: 50 },
  ])
);
