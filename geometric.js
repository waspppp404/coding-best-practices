const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const repositoryRootPath = path.resolve(__dirname, '..');
const intermediateAppPath = path.join(buildOutputPath, 'app');