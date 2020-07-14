class Vec{

    constructor (x,y){
        this.x = x;
        this.y = y;
    }

    plus(anotherVec){
        return new Vec(this.x + anotherVec.x, this.y + anotherVec.y);
    }

    minus(anotherVec){
        return new Vec(this.x - anotherVec.x, this.y - anotherVec.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

console.log("-------------------------------------");
/*---------------------------------------------------*/

class Group{
    constructor(){
        this.emptyGroup = [];
    }

    add(value){
        if(!this.has(value)){
            this.emptyGroup.push(value);
        }
    }

    delete(value){
        if(!this.has(value)){
            this.emptyGroup = this.emptyGroup.filter(v => v !==value);
        }
    }    
    
    has(value){
        return this.emptyGroup.includes(value);
    }

    static from(arr){
        let group = new Group;
        for(let item of arr){
            group.add(item);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

console.log("-------------------------------------");
/*---------------------------------------------------*/

class GroupIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }
  
    next() {
      if (this.position >= this.group.emptyGroup.length) {
        return {done: true};
      } else {
        let result = {value: this.group.emptyGroup[this.position],
                      done: false};
        this.position++;
        return result;
      }
    }
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }

  console.log("-------------------------------------");
  /*---------------------------------------------------*/

let map = {one: true, two: true, hasOwnProperty: true};
console.log(Object.prototype.hasOwnProperty.call(map, "one"));  

console.log("-------------------------------------");
/*---------------------------------------------------*/










