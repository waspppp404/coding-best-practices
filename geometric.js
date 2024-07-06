const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const goToTop = () => window.scrollTo(0, 0);