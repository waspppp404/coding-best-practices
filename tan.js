const merge = [...new Set([...a, ...b])];
const timeFromDate = date => date.toTimeString().slice(0, 8);