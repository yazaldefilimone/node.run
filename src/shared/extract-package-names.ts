export const extractPackageNames = (code: string) => {
  const regex = /import\s+([^\s]+)\s+/g;
  const matches = code.matchAll(regex);
  return [...matches].map((match) => match[1].replace(/'/g, ''));
}
