What do we mean by exporting a function in JS?
In JavaScript, especially in the context of modules, exporting a function means making it available for use in other files or modules. By exporting a function, you can import it in another file and call it there, facilitating code reuse and modularity. There are two main types of exports in JavaScript: named exports and default exports. The exports are the normal ones like: ``` // math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
} ``` then you can import those in another file: // main.js
import { add, subtract } from './math.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2 ```
Default exports are With default exports, you export a single value from a module. Typically, this is used when a module exports one main thing: ``` // math.js
export default function add(a, b) {
    return a + b;
} ``` then you can import them like the normal exports :).
In summary:
Named Exports: Allows exporting multiple values. Imported using curly braces.
Default Exports: Allows exporting a single value. Imported without curly braces.
### How can I test my JS components?:
Install the JEST in your machine using either yarn or npm:
1. npm install --save-dev jest
2. yarn add --dev jest
Then after that you create a JS file and name the test file of jest using the name, here is an example:
file name => sum.js
jest test file name => sum.test.jest
Then you run your test using => ``` npm test ```
## For testing react components: 
npm install --save-dev @testing-library/react
### How to install eslint and auto fix command to make sure you're doing great:
- Command to install: ``` npm init @eslint/config@latest ```
- Autofixing and debugging: ``` npx eslint --fix file.js ```
## Why does promises take so much time to get resolved?: 
Promises themselves do not inherently take a long time to run; the time it takes for a promise to settle (either resolve or reject) depends on the operation it represents. Promises are simply a way to handle asynchronous operations in JavaScript, allowing you to write cleaner and more manageable asynchronous code.

### Factors Affecting Promise Execution Time
Network Requests: If a promise is used to handle a network request (e.g., fetching data from an API), the time taken will depend on network latency and server response times.
I/O Operations: Promises used for file system operations (like reading or writing files) will depend on the speed of the I/O operations.
Heavy Computation: If the promise wraps a function that performs heavy computations, the time taken to complete the computation will affect the promise's resolution time.
Timers: Promises can be used with setTimeout or setInterval to delay execution, making them wait intentionally.
