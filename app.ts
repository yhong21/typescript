console.log("test git!");

//function
function mutiply(val1: number, val2: number): number{
    return val1 * val2;
}

let my : (a:number, b:number) => number;
my = mutiply;
console.log(my(6,5));

//object
let data:{name: string, age: number} = {
    name: "Max",
    age:27
};

//type alias
type Complex = {data:number[], output:(all:boolean) => number[]};
let complex : Complex = {
    data : [1, 1.2],
    output:function (all:boolean):number[]{
        return this.data;
    }
};

//union types
let ageage:number|string = 27;
ageage = "27";
//ageage = true;

//check types
let value = 30;
if (typeof value == "number"){
    console.log("value is a number");
}

//typescript 2.0 
//never
function logsth() : void{
    console.log('sth');
}
function neverReturns(): never{
    throw new Error('An error!');
}

//nullable
let canBeNull = 12;
//canBeNull = null;
//set in tsconfig.json
//"strictNullChecks": true
let canBeNullNew: number | null=12;
canBeNullNew = null;
let canOnlyBeNull = null;
//canOnlyBeNull = 12;


//var & let & const
//var create a global variable
//let create a block scope variable
let s = 10;
function reset(){
    //console.log(s);
    let s = null;
    console.log(s);
}
reset();
console.log(s);

//Arrow functions
let addNumber = function(n1:number, n2:number):number{
    return n1 + n2;
};
console.log(addNumber(3,5));

let multiplyNumber = (n1:number, n2:number) => n1 * n2;
console.log(multiplyNumber(9, 5));

let greets = () => {
    console.log("hello!");
};
greets();

let greetFriend = friend => console.log(friend);
greetFriend("Elisa");

//default parameters
let countdown = (start:number = 10, end:number = start - 5):void => {
    console.log(start);
    while(start > end){
        start --;
    }
    console.log("Done!", start);
};
countdown(5);
countdown();

//rest & spread
let numberss = [1, 10, 99, -5];
//spread: ... flat array to items
console.log(Math.max(...numberss));
//rest
function makeArray(...nums: number[]){
    return nums;
}
console.log(makeArray(1,2,6));

//Destructuring
let hobbies = ["cooking","sports"];
let [h1, h2] = hobbies;
console.log(h1, h2);

let userData = {userName : "james", age:27};
console.log(userData.userName, userData.age);
let {userName, age} = userData;
console.log(userName, age);
let {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

//Template Literals
let greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);


//class
class Person{
    name: string; //default is public
    private type: string;
    protected age: number = 20;

    constructor(name:string, public username: string){ // create and declare username here, shortcut
        this.name = name;
    }

    printAge(){
        console.log(this.age);
        this.setType("young");
    }
    setType(type:string){
        this.type = type;
        console.log(this.type);
    }
}

let person = new Person("yang", "hongy3");
console.log(person);
person.printAge();
person.setType("bad person");

//Inheritance
class Yang extends Person{
    name = "Yang";

    constructor(username:string){
        super("Yang", username);
        this.age = 28;
    }
}
let yang = new Yang("whatever");
console.log(yang); //name is Yang, overwritten
yang.printAge();

//getters & setters
class Plant{
    private _species:string = "Default";

    get species(){
        return this._species;
    }
    set species(value:string){
        if(value.length > 3){
            this._species = value;
        }
        else{
            this._species = "Default";
        }
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "asdg";
console.log(plant.species);

//static properties and methods
class Helpers{
    static PI:number = 3.14;
    static calcCircumference(diameter:number) : number{
        return diameter * this.PI;
    } 
}
console.log(Helpers.PI * 2);
console.log(Helpers.calcCircumference(8));

//abstact classes
abstract class Project{ // this class needs to be extended
    projectName:string = "Default";
    budget:number = 1000;

    abstract changeName(name:string):void; //need to be overwritten or implemented
    calcBudget(){
        return this.budget *2;
    }
}

class ITProject extends Project{
    changeName(name:string):void{
        this.projectName = name;
    }
}

let newProject = new ITProject();
newProject.changeName("super IT Project");
console.log(newProject);


//Private constructors
//Singleton

class OnlyOne{
    private static instance: OnlyOne;
    public readonly name:string;
    //private constructor(public name:string){}
    private constructor(name:string){
        this.name = name;
    }
    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('The Only One');           
        }
        return OnlyOne.instance;
    }
}
//let wrong = new OnlyOne("it's private, won't work");
let right = OnlyOne.getInstance();
console.log(right.name);

//readonly








