let protoRabbit = {
    speak(line){
        console.log(` ${this.type} says ${line}`);
    }
}

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}
console.log(makeRabbit("young"));

console.log("---------------------------------");
/*---------------------------------------------------*/

function Rabbit(type){
    this.type=type;
}

Rabbit.prototype.speak = function(line){
    console.log(` ${this.type} rabbit says '${line}'`);
}

let wiredRabbit = new Rabbit('wired');
console.log(wiredRabbit);
console.log(wiredRabbit.speak("help"));

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log(Rabbit.prototype);
console.log(Function.prototype);
console.log(Rabbit.prototype.speak);
console.log(Rabbit.prototype.speak.prototype);
console.log(Object.getPrototypeOf(Rabbit));
console.log(Object.getPrototypeOf(wiredRabbit));
console.log("---------------------------------");
/*---------------------------------------------------*/
console.log("thanks prototypes, welcome classes notation");
console.log("---------------------------------");
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
/*---------------------------------------------------*/