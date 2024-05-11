const flattenedArray = arr => [].concat(...arr);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());