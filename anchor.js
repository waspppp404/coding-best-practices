const symbolsPath = path.join(buildOutputPath, 'symbols');
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);