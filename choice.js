const isEmptyArray = arr => !arr.length;
const lastElement = arr => arr[arr.length - 1];
const removeDuplicates = (arr) => [...new Set(arr)];