const randomBoolean = () => Math.random() >= 0.5;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';