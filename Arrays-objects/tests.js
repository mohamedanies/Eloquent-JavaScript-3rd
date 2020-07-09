let todoList = [];
function remember(task){
    todoList.push(task);
}
function getTask(){
    return todoList.shift();
}

function rememberUrgently(task){
    todoList.unshift(task);
}

remember("work");
remember("eat");
remember("sleep");
console.log(todoList);
console.log(getTask());
console.log(todoList);
rememberUrgently('work');
console.log(todoList);
rememberUrgently('nowork');
console.log(todoList);
rememberUrgently('eat');
console.log(todoList);
rememberUrgently('eat');
console.log(todoList);

console.log("----------------------------------------");
/*-------------------------------------------------------*/
for(item of todoList){
    if(item == "work"){
        console.log(todoList.indexOf("work"));
        break;
    }
}
console.log("------------------------------------------");

for(let x = 0; x < todoList.length; x++){
    if(todoList[x] == "eat"){
        console.log(todoList.lastIndexOf("eat"));
        break;
        
    }
}
console.log("----------------------------------------");
/*-------------------------------------------------------*/
let arr1 = todoList.slice(2);
console.log(arr1);

let arr2 = todoList.slice(2,4);
console.log(arr2);

console.log("----------------------------------------");
/*-------------------------------------------------------*/

let arr3 = arr1.concat(arr2);
console.log(arr3);
console.log("----------------------------------------");
console.log(arr3.concat("x"));
console.log("----------------------------------------");
console.log(arr3.concat("y","z"));
console.log("----------------------------------------");
console.log(arr3.concat([1,2,3],['a','b','c']));
console.log("----------------------------------------");

/*-------------------------------------------------------*/

let arr4 = [];
arr4.age = 22;
console.log(arr4);
console.log("----------------------------------------");
/*-------------------------------------------------------*/
console.log("word".indexOf("o"));
console.log("word".indexOf("rd"));

console.log("----------------------------------------");

let arr5 = ['abc','b','c','d'];
console.log(arr5.indexOf('abc'));

console.log("----------------------------------------");
/*-------------------------------------------------------*/

console.log("  mohamed    anis   salem  ");
console.log("  mohamed    anis   salem  ".trim());
console.log("\t  mohamed    anis   salem  \n".trim());

console.log("----------------------------------------");
/*-------------------------------------------------------*/
console.log("padStrat is  a string method to start string with some char: ")
console.log("c".padStart(3,"+"));

console.log("----------------------------------------");
/*-------------------------------------------------------*/
let fullname = "mohammed anis salem";
let nameParts = fullname.split(" ");
console.log(nameParts);
let rename = nameParts.join("-");
console.log(rename);

console.log("----------------------------------------");
/*-------------------------------------------------------*/

console.log("bs".repeat(5));

console.log("----------------------------------------");
/*-------------------------------------------------------*/
console.log(Math.max(1,2,3,4,5,6));

function maxWithRestPramerers(...numbers){
    let result = -Infinity;
    for(number of numbers){
        if(number > result) result = number;
    }
    return result;
}
console.log(maxWithRestPramerers(3,1,4,5,2,9));

console.log("----------------------------------------");
/*-------------------------------------------------------*/
function minWithRestPramerers(x,y,...numbers){
    let result = Infinity;
    for(number of numbers){
        if(number < result){
            
                result = number;
        }
        if(result > x ){
            result = x;
        }
        if(result > y){
                result = y;
        }

        
    }
    return result;
}
console.log(minWithRestPramerers(3,1,4,5,2,9,0,-1));

console.log("----------------------------------------");
/*-------------------------------------------------------*/

let nums = [1, 30, 20, 4, 70];
console.log(maxWithRestPramerers(...nums));
console.log(minWithRestPramerers(...nums));
console.log(Math.max(...nums));
console.log(Math.min(...nums));
console.log(maxWithRestPramerers(77, ...nums, 99));
console.log(minWithRestPramerers(77, ...nums, 99));
console.log(['start', ...nums, 'end']);

console.log("----------------------------------------");
/*-------------------------------------------------------*/

console.log("the maximum is : " , Math.max(1000, 2000));
console.log("the minimum is : " , Math.min(1000, 2000));
console.log("the sqrt of 81 is : ", Math.sqrt(81));

console.log("----------------------------------------");
/*-------------------------------------------------------*/
function max(){
    // code to get max here
    console.log(" valid function and allowed to overwrite max function of the Math object");
    console.log(" javascript will not refuse that");
}
max();

console.log("----------------------------------------");
/*-------------------------------------------------------*/
console.log(Math.PI);
console.log(Math.cos(45));
console.log(Math.sin(45));
console.log(Math.tan(45));
console.log(Math.acos(1));
console.log(Math.asin(1));
console.log(Math.atan(1));

console.log("----------------------------------------");
/*-------------------------------------------------------*/
console.log(Math.random());
console.log(Math.floor(Math.random()*10));
console.log(Math.ceil(5.05));
console.log(Math.round(5.05));
console.log(Math.round(5.12));
console.log(Math.round(5.4));
console.log(Math.round(5.5));
console.log(Math.round(5.6));

console.log("----------------------------------------");
/*-------------------------------------------------------*/
let name = { name : "ahmed", age : 23};
console.log(name);

// binding on object's contents
let { myname , age }= { myname : "ali", age : 15};
console.log(myname , age);

console.log("----------------------------------------");
/*-------------------------------------------------------*/

let myobj = {customer: "ahmed", buyer: "ali"};
console.log(myobj.customer);
// convert obj to json
let myjson = JSON.stringify(myobj);
console.log(myjson);
// convert json back to object
console.log(JSON.parse(myjson).customer);

console.log("----------------------------------------");
/*-------------------------------------------------------*/























































































































































































