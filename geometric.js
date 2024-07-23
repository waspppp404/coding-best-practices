const flattenedArray = arr => [].concat(...arr);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;