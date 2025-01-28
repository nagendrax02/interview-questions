# Interview Questions

## 1- How event loop priortize the async tasks?
## ANS- 
#### 1: Microtask Queue (High Priority)

* Promises (.then, .catch, async/await)
* MutationObserver
* Microtasks execute immediately after synchronous code and before rendering.

#### 3. Macrotask Queue (Lower Priority)
* setTimeout, setInterval
* I/O operations (network requests, file reading)
* MessageChannel, setImmediate (Node.js)
* Macrotasks execute after the microtask queue is cleared.

 ### Code Example

 console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask: Promise"));

console.log("End");      

----------------------------------------------------------------------------------------
