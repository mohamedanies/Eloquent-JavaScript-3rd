// creating regular expressions

let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re1);
console.log(re2);
console.log(re1 == re2);
console.log(Object.getPrototypeOf(re1));
console.log(Object.getPrototypeOf(re2));
console.log("------------------------------------");
/*--------------------------------------------------*/
// testing fir matches:

console.log(re1.test("abcdef"));
console.log(re2.test("abdcef"));

console.log("------------------------------------");
/*--------------------------------------------------*/

// generating random phone number
function randomPhoneNum(servey){
    let arr =["010", "012"];
let randomize = "";
let phoneNum ="";
for(let count = 0; count < 8; count++){
    randomize += (Math.floor(Math.random()*10));
}
// let servey = prompt("enter network company name (vodafone/orange) ? ");
// console.log(servey);
if(servey == "vodafone"){
    phoneNum = arr[0];
    phoneNum += randomize;  
}
if(servey == "orange"){
    phoneNum = arr[1];
    phoneNum += randomize;  
}
console.log(phoneNum);
}
randomPhoneNum("vodafone");
randomPhoneNum("orange");

console.log("------------------------------------");
/*--------------------------------------------------*/

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime.test("30-jan-2003 15:20"));

console.log("------------------------------------");
/*--------------------------------------------------*/




