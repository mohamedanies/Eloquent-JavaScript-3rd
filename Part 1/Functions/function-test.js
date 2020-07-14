 const power = function(base, exponent){
       let result = 1;
       for(let count = 0; count < exponent; count++){
          result *=base;
        }
        return result;
}
    
console.log('from first function' + "\n" + power(3,5));
console.log("-----------------------------------------");
/*---------------------------------------------------*/
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
  let ingredientAmount = amount * factor;
  if (ingredientAmount > 1) {
  unit += "s";
  }
  console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  console.log("from second function");
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
  };
  hummus(4);
/*---------------------------------------------*/
console.log("-------------------------------");
const square = x => x*x;
console.log("the square is " + square(2));

console.log("-------------------------------");
/*----------------------------------------------*/
const noName = ()=> console.log("just an empty arrow function");
noName();
console.log("-------------------------------");
/*------------------------------------------*/
// function chicken() {
//   return egg();
//   }
// function egg() {
//   return chicken();
//   }
//   console.log(chicken() + " came first.");

/*------------------------------------------*/
function free(x){
  return x*x;
}
console.log(free(3,"blabala", true));
console.log("---------------------------------");
/*------------------------------------------------*/
function add(a,b,c){
  if(c != undefined){
    return a+b+c;
  }
  else{
    return("can't add number to undefined it results NaN");
  }
  
}
console.log(add(2,3));
console.log("--------------------------------");

console.log("Note : \n");
console.log(`JavaScript is extremely broad-minded about the number of arguments you pass to a function If
you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get
assigned the value undefined .
`);
console.log("--------------------------------");
/*------------------------------------------------------*/

function add(a,b,c = 0){
  
    return a+b+c;
}
console.log("adding default value will replace the undefined value and function wil work");
console.log("result without giving c is : " + add(2,3));
console.log("result with giving c value is : " + add(2,3,7));
console.log("--------------------------------");
/*--------------------------------------------------*/
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
  console.log(twice(5));
  console.log("--------------------------------");
/*--------------------------------------------------*/
function multiplier(factor) {
  return number = (x) => x * factor;
}
let twice2 = multiplier(2);
  console.log(twice2(5));
  console.log("--------------------------------");
/*-------------------------------------------------*/
function power2(base, exponent) {
  if (exponent == 0) {
  return 1;
  } else {
  return base * power2(base, exponent - 1);
  }
  }
  console.log(power2(2, 3));
console.log("--------------------------------");
/*-------------------------------------------------------*/

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
  string = "0" + string;
  }
  return string;
  }
  function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
  }
  printFarmInventory(7, 16, 3);
  console.log("--------------------------------");
/*-------------------------------------------------------*/















  


























