//Simple Generic
function echo(data:any){
    return data;
}

console.log(echo("Max").length);
console.log(echo(23).length);

//Better Generic
function betterEcho<T>(data: T){
    return data;
}

console.log(betterEcho("Max").length);
//console.log(betterEcho(23).length);
console.log(betterEcho<number>(23));

//Build-in Generics
const testResults: Array<number> = [1.3, 4.8];
testResults.push(-2.4);
console.log(testResults);

//Arrays
function printAll<T>(args: T[]){
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banand"]);

//Generic Types
const echo2: <T>(data:T) => T = betterEcho;
console.log(echo2<string>("sdagga"));

//Generic Classes
class SimpleNMath<T extends number| string, U extends number | string>{
    baseValue:T;
    multiplyValue: U;
    calculcate() : number{
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleNMath<number, string>();
simpleMath.baseValue = 20;
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculcate());

class MyMap<T>{
    private map:{[key:string]:T} = {};
    
    setItem(key: string, item: T){
        this.map[key] = item;
    }
    getItem(key:string){
        return this.map[key];
    }
    clear(){
        this.map = {};
    }
    printMap(){
        for(let key in this.map){
            console.log(key, this.map[key]);
        }
    }
}

let numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("banana", 4);
numberMap.printMap();