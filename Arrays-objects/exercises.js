function range(start, end){
    let arr = [];
    while(start <= end){
         arr.push(start);
         start++;
    }
    return arr;
}
console.log(range(1,10));

console.log("-------------------------------------");

function sum(myarr){
    let result = 0;
    for(i of myarr){
        result += i;
    }
    return result;
}
console.log(sum([2,5,1]));
console.log(sum(range(1,10)));

console.log("-------------------------------------");
/*---------------------------------------------------*/

// this function is working with any 3 valid numbers
function rangeWithStep(start, end, step = 1){
    let rangeArray = [];
    //swap values if end < start before any action
    if(end < start){
        [start, end] = [end, start];
    }
    if(step < end){
        while(start <= end){
            if(step == 0){
                rangeArray.push(start);
                start++;
            }
            else if(step < 0){
                rangeArray.push(end);
                end += step;
                // rangeArray = rangeArray.reverse();
            }
            else{
                 rangeArray.push(start);
                 start +=step;
            }
        }
        return rangeArray;
    }
    else{
        console.log("step value can't be greater than the end");
    }

    }
    
console.log(rangeWithStep(10,1,2));

console.log("-------------------------------------");
/*---------------------------------------------------*/

function reverseArray(array){
    reversedArray = array.reverse();
    return reversedArray;
}

console.log(reverseArray([2,4,6,8]));

console.log("-------------------------------------");
/*---------------------------------------------------*/

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }

  console.log(arrayToList([5, 20]));
  console.log(listToArray(arrayToList([10, 20, 30])));

  console.log("-------------------------------------");
  /*---------------------------------------------------*/

  function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }

  let obj1 = {name: "anis", id: 1};
  let obj2 = { name: "anis", id: 1};

  console.log(deepEqual(obj1, obj2));

console.log("-------------------------------------");
/*---------------------------------------------------*/






































