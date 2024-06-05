const minNumber = arr => Math.min(...arr);
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));