function logged(constructorFn: Function):void{
    console.log(constructorFn);
}
// Decorator: attach a function with @
@logged
class Person4{
    constructor(){
        console.log("Hi");
    }
    sayhello(){
        console.log("Hello");
    }
}

//Factory
function logging(value:boolean){
    return logged;
}
@logging(true)
class car2{
    constructor(){
        console.log("car");
    }
}

//Advanced
function printable(constructorFn:Function){
    constructorFn.prototype.print=function(){
        console.log(this);
    }
}
@printable
class Plant2{
    name = "Green";
}
let plant2 = new Plant2();
(<any>plant2).print();


//Method decorator
//property decorator
function editable(value:boolean){
    return function(tartget:any, propNAme:string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}
function overwritable(value:boolean){
    return function(target:any, propName:string):any{
        const newDescriptor : PropertyDescriptor = {
            writable:value
        };
        return newDescriptor;
    }
}

class Project2{
    @overwritable(false)
    projectName:string;

    constructor(name:string){
        this.projectName = name;
    }
    @editable(false)
    calcBudget(){
        console.log(100); 
    }
}
let project = new Project2("proj");
project.calcBudget();
project.calcBudget = function(){
    console.log(1000);
}
project.calcBudget();
console.log(project);

//Parameter decorator
function printInfo(target:any, methodNAme:string, paramIndex: number){
    console.log(target);
    console.log(methodNAme);
    console.log(paramIndex);
}
class Course{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    printStudentNumber(mode:string, @printInfo printAll: boolean){
        if(printAll){
            console.log(10000);
        }
        else{
            console.log(10);
        }
    }
}
let course = new Course("Course");
course.printStudentNumber("anything", true);
course.printStudentNumber("anything", false);