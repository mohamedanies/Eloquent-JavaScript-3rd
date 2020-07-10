function repeat(n, action){
    for(let i=0; i < n; i++){
        action(i)
    }
}
repeat(5, console.log);

console.log("-----------------------------------------");
/*------------------------------------------------------*/

let labels = [];
repeat(5, i => {
labels.push(`Unit ${i + 1}`);
});
console.log(labels);

console.log("-----------------------------------------");
/*------------------------------------------------------*/

function greaterThan(n) {
    return m => m > n;
    }
    let greaterThan10 = greaterThan(10);
    console.log(greaterThan10(11));
    
console.log("-----------------------------------------");
/*------------------------------------------------------*/  

function noisy(f) {
    return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
    };
    }
    noisy(Math.min)(3, 2, 1);

console.log("-----------------------------------------");
/*------------------------------------------------------*/      

function unless(test, then) {
    if (!test) then();
    }
    repeat(3, n => {
    unless(n % 2 == 1, () => {
    console.log(n, "is even");
    });
    });

console.log("-----------------------------------------");
/*------------------------------------------------------*/
[1,2,3,4,5,6].forEach(number => console.log(number));

console.log("-----------------------------------------");
/*------------------------------------------------------*/
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
    
console.log("-----------------------------------------");
/*------------------------------------------------------*/

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);

console.log("-----------------------------------------");
/*------------------------------------------------------*/

function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }
  
  function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  console.log(every([2, 4, 16], n => n < 10));
  console.log(every([], n => n < 10));
console.log("-----------------------------------------");
/*------------------------------------------------------*/
  
















    
































