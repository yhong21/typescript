// Exercise 1
let double = value => value * 2;
console.log(double(10));

// Exercise 2
let greet = (name="Max") => console.log("Hello, " + name);
greet();
greet("Anna");

// Exercise 3
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5
let [result1, result2, result3] = [3.89, 2.99, 1.38];
console.log(result1, result2, result3);

// Exercise 6
let {firstName, experience} = {firstName: "Will", experience: 12};
console.log(firstName, experience);