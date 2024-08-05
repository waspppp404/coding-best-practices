const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const isWeekday = (date) => date.getDay() % 6 !== 0;
const arrayContains = (arr, element) => arr.includes(element);