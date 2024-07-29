const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;