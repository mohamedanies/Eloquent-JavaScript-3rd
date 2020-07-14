class Rabbit{
      constructor(type){
          this.type = type;
      }

speak(line){
    console.log(` ${this.type} rabbit says ${line}`);
   }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
console.log(killerRabbit);
console.log(blackRabbit);
console.log(killerRabbit.speak("i will kill more"));
console.log(blackRabbit.speak("i will stop you"));

console.log("-------------------------------------");
/*---------------------------------------------------*/
// ommitting the class name
let obj = new class{ getWord(){ return "hello"}};
console.log(obj.getWord());

console.log("-------------------------------------");
/*---------------------------------------------------*/
console.log(Object.getPrototypeOf(Rabbit));
Rabbit.prototype.teeth = "small";
console.log(Rabbit.prototype.teeth);
console.log(killerRabbit.teeth);
killerRabbit.teeth = " big and sharp";
// now it has it's own property even with the same name of the one
// in it's prototype

console.log(killerRabbit.teeth);
// but
console.log(blackRabbit.teeth);

console.log("-------------------------------------");
/*---------------------------------------------------*/
console.log(Object.prototype.toString());
console.log(Array.toString());
console.log(Function.toString());
console.log(Object.prototype.toString() == Array.toString());
console.log(Object.prototype.toString() == Function.toString());
console.log([1,2,3,4].toString());
console.log(Object.prototype.toString([1,2,3,4]));
console.log(Object.prototype.toString.call([1,2,3,4]));

console.log("-------------------------------------");
/*---------------------------------------------------*/

let ages= {
Boris:33,
Liang:55,
Júlia:66
};
console.log(`Júlia is ${ages["Júlia"]}`);

console.log("Is Jack's age known?", "Jack" in ages);

console.log("Is toString's age known?", "toString" in ages);

console.log("toString" in Object.create(null));

console.log("-------------------------------------");
/*---------------------------------------------------*/

let ages2 = new Map();
ages2.set("Boris", 39);
ages2.set("Liang", 22);
ages2.set("Júlia", 62);

console.log(`Júlia is ${ages2.get("Júlia")}`);
console.log("Is Jack's age known?", ages2.has("Jack"));
console.log(ages2.has("toString"));

console.log("-------------------------------------");
/*---------------------------------------------------*/

console.log({x: 1}.hasOwnProperty("x"));
console.log({x: 1}.hasOwnProperty("toString"));

console.log("-------------------------------------");
/*---------------------------------------------------*/

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
};
    console.log(String(blackRabbit));
    
console.log("-------------------------------------");
/*---------------------------------------------------*/

let sym = Symbol("name");
console.log(sym == Symbol("name"));
    
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
    
console.log("-------------------------------------");
/*---------------------------------------------------*/

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

console.log("-------------------------------------");
/*---------------------------------------------------*/

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};
    
console.log(varyingSize.size);
console.log(varyingSize.size);

console.log("-------------------------------------");
/*---------------------------------------------------*/

class Temperature {
    constructor(celsius) {
    this.celsius = celsius;
    }
    get fahrenheit() {
    return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
    }
    }
    let temp = new Temperature(22);
    console.log(temp.fahrenheit);
    temp.fahrenheit = 86;
    console.log(temp.celsius);

console.log("-------------------------------------");
/*---------------------------------------------------*/   

console.log([1,2,3] instanceof(Array));

console.log("-------------------------------------");
/*---------------------------------------------------*/
