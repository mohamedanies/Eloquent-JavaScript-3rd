let fifteen = Promise.resolve(15);
console.log(fifteen);
console.log(Object.getPrototypeOf(fifteen));
fifteen.then(value => console.log(`Got ${value}`));
