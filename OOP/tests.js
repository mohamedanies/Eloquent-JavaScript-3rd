let rabbit = {};
rabbit.speak = function(line) {
console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");
console.log(rabbit);

console.log("---------------------------------");
/*------------------------------------------------*/

console.log(`test to see that this points to the rabbit ${typeof(this)}`);

console.log("---------------------------------");
/*------------------------------------------------*/

function speak(line){
    console.log(`the ${this.type} rabbit says ${line}`);
}
let whiteRabbit= {type:"white", speak};
let oldRabbit = {type: "old", speak};

console.log(whiteRabbit.speak("my color is white"));
console.log(oldRabbit.speak("i'm verey old i think i'll die soon"));
console.log("ok, (this) called on the body of a function and points to the object which called it ");

console.log("---------------------------------");
/*------------------------------------------------*/
speak.call(whiteRabbit, "some thing");

console.log("---------------------------------");
/*------------------------------------------------*/
function normalize() {
    console.log(this.coords.map(n => n / this.length));
    console.log(this);
    }
    normalize.call({coords: [0, 2, 3], length: 5});
    

console.log("---------------------------------");
/*------------------------------------------------*/
let empty = {};
console.log(empty.toString);
console.log(empty.toString());


console.log("---------------------------------");
/*------------------------------------------------*/

console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log("^^^^^^^^^^^^^^^^^^^^^^");
console.log(Object.getPrototypeOf(Math.min) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);
console.log("^^^^^^^^^^^^^^^^^^^^^^");
console.log(typeof(Function));
console.log(typeof(Array));


console.log("---------------------------------");
/*------------------------------------------------*/

let protoRabbit = {
    speak(line){
        console.log(` ${this.type} says ${line}`);
    }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.speak("some words");
console.log(Object.getPrototypeOf(killerRabbit));
console.log(Object.getPrototypeOf(protoRabbit));

console.log("---------------------------------");
/*------------------------------------------------*/
