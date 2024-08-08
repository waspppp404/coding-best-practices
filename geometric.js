const merge = (a, b) => a.concat(b);
const executableName = getExecutableName(channel, appName);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);