const stringReverse = str => str.split("").reverse().join("");
const uniqueArray = arr => [...new Set(arr)];
const timeFromDate = date => date.toTimeString().slice(0, 8);
const lastElement = arr => arr[arr.length - 1];