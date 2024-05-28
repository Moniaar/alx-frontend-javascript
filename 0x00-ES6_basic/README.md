#### What does it mean to lint a code?:
It means to have a set rules of structures to highlight the issues within your code, weather it is syntax or undeclared variables bug, it will handle that for you by pointing at it. 
We have to ways to do that:
1. Passive: done by taking a piece of code, and manually running it through a tool to identify potential issues. Either by running the file using the command line, or copying your code and pasting it in a specific linter tool. Examples for this can be: JSON Formatter to validate a JSON data structure

2. Active: this can be done by running a monitor tool that is constantly checking the file that your working on in order to spot inconsistencies and possible errors. You can achieve this by adding a lint as a plug-in in your favorite code editor! :). 
Examples for an active one can be:
- Pycodestyle for python 
- ESLint for JS 

Now back to learning using asking questions method (Active recall), look at these 3 questions:
### What ES6 is? :
The Seconed major revision of JS, It's ECMAScript 2015 which is also known as ES6 and ECMAScript 6.
### New features introduced in ES6? :
It's supported from various browsers since 2017, however it is not supported in Internet Explorer. 
### The difference between a constant and a variable? :
let makes you declare a variable, const used to declare a constant. However, keep in mind that Constants are similar to let variables, except that the value cannot be changed. 

## Arrow functions
It's a short way to type a JS function, without including return, parenthesis, and the word function. However they have important features you need to keep in mind:
- They're not hoisted: you need to declare the function before using it. 
- They don't have thier own "this" and they're not suitable for dealing with objects methods. 
- You can only omit the return keyword and the curly brackets if the function is a single statement.

Which is better, const or var? 
Const, because functions expressions always return constant values. 

##Object Destructuring:
You define an object in a JSON format first, then go declare a new one by defining new values for it by assigning array values and object properties to variables:
```
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;
```
Two things to note here before saying goodbye:
- When destructuring an object, you must use the same name for the variables as the corresponding object keys (names).
- The order of the keys (names) does not matter. 

## Array Destructuring (Has same rules as object Destructuring! :)):
It makes it easy to assign array values and object properties to variables. 
```
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits; 
```

## The ... Operator:
The "spread" operator spreads elements of iterable objects "يفكك العناصر الموجودة داخل المصفوفة". It can also be used to expand an iterable into more arguments for function calls. 

## For/of loop:
It lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more. Here is an example of iterating through a string:
```
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + " ";
} 
```

## Maps:
In JavaScript, a `Map` is a collection of key-value pairs where both the keys and the values can be of any data type. Unlike objects, which only allow strings and symbols as keys, `Map` can use any value (including objects and functions) as a key.

Here’s a small example to illustrate how to use a `Map`:

```javascript
// Create a new Map
let myMap = new Map();

// Set key-value pairs
myMap.set('name', 'Alice');
myMap.set(1, 'one');
myMap.set(true, 'boolean');

// Get values by key
console.log(myMap.get('name')); // Output: Alice
console.log(myMap.get(1)); // Output: one
console.log(myMap.get(true)); // Output: boolean

// Check if a key exists
console.log(myMap.has('name')); // Output: true
console.log(myMap.has(2)); // Output: false

// Get the size of the Map
console.log(myMap.size); // Output: 3

// Iterate over the Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// 1: one
// true: boolean
```

In this example, `myMap` is a `Map` instance where we set three key-value pairs. We then demonstrate how to retrieve values, check for the existence of keys, get the size of the map, and iterate over the entries.

## Sets:
```
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c"); 
```

### Classes:
JavaScript class is not an object. They're considered templates for JavaScript Objects only. We Use the keyword class to create a class and Always add a method named constructor(). Here is the syntax with an example: 
```
class ClassName {
  constructor() { ... }
}
```
The example:
```
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
} 
```
Creating objects from the previous class:
```const myCar1 = new Car("Ford", 2014); ```


## Block scoped variables:
Block-scoped variables in ES6 refer to variables declared with let and const which are confined to the block (enclosed by {}) in which they are declared. This is different from variables declared with var, which are either function-scoped or globally scoped.Example:Consider the following code snippets that illustrate the difference between var and let:Using var:
```
function testVar() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

testVar();
```
In this example, var x inside the if block is the same variable as var x outside the block. Both console.log statements print. 

Using let:
```
function testLet() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}
```

Here, let x inside the if block is a different variable from let x outside the block. The first console.log statement prints 2, while the second prints. 

#### Explanation:
- var: Variables declared with var are function-scoped. This means they are accessible anywhere within the function they are declared in.

- let and const: Variables declared with let and const are block-scoped. This means they are only accessible within the block they are declared in. Block-scoping helps prevent issues that arise from variable hoisting and reduces the likelihood of errors due to variable re-declarations within the same scope.