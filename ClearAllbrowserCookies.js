const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);