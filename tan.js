const result = await makeHttpRequest(url);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());