const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const arrayContains = (arr, element) => arr.includes(element);