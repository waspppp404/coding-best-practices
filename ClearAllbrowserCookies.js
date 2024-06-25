const maxNumber = arr => Math.max(...arr);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));