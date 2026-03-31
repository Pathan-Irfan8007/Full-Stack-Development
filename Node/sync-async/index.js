// Synchronous

console.log("A");
console.log("B");
console.log("C");

// Output : A -> B -> C


console.log("------------------------");
// Asynchronous

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");

// Output : A -> C -> B
