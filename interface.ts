//define a contract
interface NamedPerson{
    name:string;
    age? : number; //optional
    [propName:string]:any;

    greet(lastName:string):void;
}

function greet2(person: NamedPerson){
    console.log("Hello, " + person.name);
}
function changeName(person: NamedPerson, name:string){
    person.name = name;
}
const person2:NamedPerson = {
    name: "Max",
    age:27,
    hobby: [],
    greet(lastName:string){
        console.log(lastName);
    }
};

greet2(person2);
changeName(person2, "yang");
greet2(person2);
person2.greet("hong");

class Person2 implements NamedPerson{
    name: string;
    greet(lastName:string){
        console.log("Hi, I am " + this.name + " " + lastName);
    }
}
const myPerson = new Person2();
myPerson.name = "Yang";
greet2(myPerson);
myPerson.greet("Hong");


//Function types
interface DoubleValueFunc{
    (number1: number, number2: number):number; 
}
let myDouble: DoubleValueFunc = function(num1, num2){
    return (num1 + num2) * 2;
}
console.log(myDouble(10,20));


// interface inheritance
interface AgedPerson extends NamedPerson{
    age:number;
}
const oldPerson : AgedPerson = {
    age:60,
    name:"Max",
    greet(lastName){
        console.log("Hello!");
    }
}

//interface get totally ignored when translating to JS, it's only used for your own error check.