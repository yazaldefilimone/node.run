export function removeFunction(code: string) {
  const regex = /\/\/fn\s+function\s+(\w+)/g;
  const functionNames = [];
  let matches;
  while ((matches = regex.exec(code)) !== null) {
    functionNames.push(matches[1]);
  }
  return functionNames
}
