const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;