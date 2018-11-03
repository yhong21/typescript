// Exercise 1
class Car{
    name:string;
    acceleration: number = 0;

    constructor(name:string){
        this.name = name;
    }

    honk(){
        console.log("Toooooooooot!");
    }
    accelerate(speed:number){
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2
/*var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
*/

abstract class BaseObject{
    width:number = 0;
    length:number = 0;
    constructor(width, length){
        this.width = width;
        this.length = length;
    }
    abstract calcSize():number;
}
class Rectangle extends BaseObject{
    calcSize(){
        return this.length * this.width;
    }
}
let rectangle = new Rectangle(5,2);
console.log(rectangle.calcSize());

// Exercise 3
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }s
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });

class Person1 {
    private _firstName:string = "";
    get FirstName(){
        return this._firstName;
    }
    set FirstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
    enumerable = true;
    configurable = true;
}
let person1 = new Person1();

console.log(person1.FirstName);
person1.FirstName = "Ma";
console.log(person1.FirstName);
person1.FirstName = "Maximilian";
console.log(person1.FirstName);
