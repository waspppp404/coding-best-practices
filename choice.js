const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const toggleBool = () => (bool = !bool);