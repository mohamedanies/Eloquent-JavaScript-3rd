let x;
let y;
const minimum =(x,y) => console.log(Math.min(x, y));
minimum(2,3);
console.log("---------------------------------------------");
/*----------------------------------------------------------*/
function maxOrmin(x,y){
    const getMin = Math.min(x,y);
    console.log("the minimum is : ", getMin);
    const getMax = Math.max(x,y);
    console.log("the maximum is : " , getMax);

}
maxOrmin(5,8);

console.log("---------------------------------------------");
/*----------------------------------------------------------*/

console.log("the min is : " , Math.min(4,8));

console.log("---------------------------------------------");
/*----------------------------------------------------------*/
function maxmin(x,y){
    if(x < y){
        console.log("the min is : ", x);
        console.log("the max is : ", y);
       
    }
    else if(x === y){
        console.log(" they are rqual");
    }
    else{
        console.log("the min is :", y);
        console.log("the max is : ", x);
        
    }
}
maxmin(6,11);

console.log("---------------------------------------------");
/*----------------------------------------------------------*/

function isEven(number) {
    if (number == 0) return true;
    else if (number == 1) return false;
    else return isEven(number - 2);
  }
  
  console.log(isEven(50));
  console.log(isEven(75));
  
  console.log("---------------------------------------------");
  /*----------------------------------------------------------*/
  function countBs(word){
      let count = 0;
      for(let i = 0; i < word.length; i++){
          if (word[i] === 'B'){
              count++;
          }          
      }
      console.log("the number of B's in String is :  ", count);
  }
  countBs("BBC");

  console.log("---------------------------------------------");
  /*----------------------------------------------------------*/
  function countChar(word, ch){
      let count = 0;
      for(let i = 0; i < word.length; i++){
          if(word[i] === ch){
              count++;
          }
      }
      console.log(`the number of ${ch}'s in the word is : `, count);
      countBs(word);
  }
countChar("Ali  B Ahmed B AAAA", "A");

console.log("---------------------------------------------");
/*----------------------------------------------------------*/




