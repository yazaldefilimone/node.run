const measure = `function measure(fn) {
  const t1 = performance.now();
  const mem1 = process.memoryUsage().heapUsed;
  fn();
  const mem2 = process.memoryUsage().heapUsed;
  const t2 = performance.now();
  const time = t2 - t1;
  const memory = mem2 - mem1;
  return { time, memory };
}`



export const measureExec = (code:string, fn: string[]) =>  {
  return `
  ${code}
  ${measure}

const fn1 = measure(${fn[0]})
const fn2 = measure(${fn[1]})

  console.log({${fn[0]}: fn1})
  console.log({${fn[1]}: fn2})
  `
}