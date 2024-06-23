var regexp  = new RegExp('{{([^}]+)}}', 'g');
const isEmptyObject = obj => Object.keys(obj).length === 0;