//Function declarations
function functionname(parameters){
    //function body
};
function greet(name){
    console.log("Hello, "+ name + "!")
};
greet("Alice");//output: Hello Alice!


function fullname(firstname){
      console.log("Iam, " + firstname +"#")
};
fullname("MaryPrecious")

function level(university){
    console.log("student at," + university )
};
level("university")


//expression functions or function expressions
const myfunction = function(parameters){
    //function body
};
//or
const myFunction = function myname(parameters){
    //function code
};

const add = function(a , c){
    return a + c;
};
console.log(add(4,6));//output: 10

const Fullname = function(firstname , lastname){
    return firstname + lastname;
};
console.log(Fullname("Precie" , "Aine"));

const product = function(price,tax){
    return price * tax;
};
console.log(product(2000,0.5))


//ANONYMOUS FUNCTIONS
// function() {
//     //code
// }//invalid if it's not assigned or used.

const Greet = function(){
    console.log("Hello");
};
//or
// setTimeout(function){             //callback
//     console.log("Delayed message");
// }, 1000);//invalid

//example1 Assigned to a Variable
const Add = function(a, b) {
    return a + b;
};
console.log(Add(2,3)); //output5

//Example2: Used as a callback
[1, 2, 3].forEach(function(number){
console.log(number * 2);
});

["Precious", "Immy", "Rhina"].forEach(function(name){
    console.log(name +  " is a sister")
});
 

//ARROW FUNCTIONS

//Before arrow    let myFunction = function(a, b) {return a * b}
//let myFunction = (a, b) => a * b;

//Before arrow
// let hello = function() {
//     return "Hello World"
// }
// //Arrow functions
// let hello = () => {
//     return "Hello World"
// }

//arrow  functions return value by default:
//let hello = () => " Hello World";

//Arrow functions with parameters
//let hello = (val) => "Hello " + val;

//Arrow functions without parentheses
//let hello = val => "Hello " + val;

const say = (name) => "Hello, " + name;
console.log(say("Alice")); //output: Hello Alice

const course = (tittle) => "I love ," + tittle;
console.log(course("JavaScript"));

const businessname = (name) => "We are " + name;
console.log(businessname("Mayondo Wood and Furniture"));


//FUNCTIONS WITHOUT A PARAMETER AND RETURN
function functionName(){
    //do something
}

//Example
//simple message
function sayHello(){
    console.log("Hello!")
}
sayHello(); //output: Hello!

function inform(){
    console.log("I can code!")
}
inform();

function location(){
    console.log("We are located in Mukono")
}
location();

// //arrow function version****
// const showTime = () => {
//   console.log(newDate().toLocaleTimeString());
// };

// showTime(); // Output: current time


//FUNCTIONS WITHOUT RETURNING VALUE
function sayHello(){
    console.log("Hello, World");
}
sayHello(); //output: Hello, World

let result = sayHello();
console.log(result);//output undefined
//sayHello() runs, but does not return a value.
//result becomes undefined.


//If a function doesn’t have a return, JavaScript automatically returns undefined
function none(){
    //no return
}
console.log(none());//undefined
 //they are not for producing values


//FUNCTIONS WITH PARAMETERS
function functionname(parameter1, parameter2){
    //use parameters inside the function
}

//EXAMPLE
//Single Parameter
function greet(name){
    console.log("Hello," + name + "!");
}
greet("Mary");//Output: Hello, Mary!
// name is parameter.    "Mary" is argument passed when calling the function

//Multiple Parameters
const greet1 = (name) => {
    console.log(`Hi, ${name}!`);
};
greet1("Precious");// Output: Hi, Precious


//Default Parameters
function greet2(name = "Guest"){
    console.log("Hello, " + name);
}greet2();  //hello, Guest
greet2("David");  //Hello, David


//Rest Parameters (Flexible Number of Inputs)
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
//...numbers collects all arguments into an array


//UNLIMITED NUMBER OR PARAMETERS IN ARROW FUCTIONS 
//In JavaScript, to handle an unlimited number of parameters in an arrow function, you use the rest parameter syntax

//(...args)

//Example: Arrow function Function with Unlimited Parameters
// const functionName = (...parameters) => {
//     //parameters in an array
// }


const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3));        // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100

//...numbers collects all arguments into an array.
//The arrow function can now process any number of inputs.


//SELF INVOKING FUNCTIONS IN JAVASCRIPT

// (function() {
//   // Code inside runs immediately
//   console.log("This runs automatically!");
// })();

// This function defines itself and calls itself immediately.
// It is not reusable — it runs once and is done.

//Arrow function version
(() => {
  console.log("Self-invoking arrow function!");
})();

//PROTECT VARIABLES
(function() {
  let secret = "hidden value";
  console.log("Accessing secret:", secret);
})();

console.log("secret"); // ReferenceError: secret is not defined

//Self-invoking functions are function expressions, not declarations.
//Wrapping them in parentheses () turns them into an expression. The second () invokes it.

// function() {
//   console.log("This won't work");
// }(); //SyntaxError

//SCOPE
//Global scope
let name = "Mary"; // Global scope

function greet(){
  console.log("Hello, " + "Name"); // Accessible
}

greet(); // Output: Hello, Mary



//Function scope
function sayHello() {
  let message = "Hello!";
  console.log("message");
}

sayHello();      // Output: Hello!
console.log("message"); //Error: message is not defined

//BLOCK SCOPE
if (true) {
  let a = 10;
  const b = 20;
  console.log(a, b); // Accessible
}

// console.log(a); // Error
// console.log(b); // Error

//LEXICAL/STATIC SCOPE
function outer() {
  let outerVar = "I'm outside";

  function inner() {
    console.log(outerVar); // Can access outer scope
  }

  inner();
}

outer(); // Output: I'm outside









