const isEven = (num) => num % 2 === 0;
const resultingPromises = urls.map((url) => makHttpRequest(url));
const symbolsPath = path.join(buildOutputPath, 'symbols');