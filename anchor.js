const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';