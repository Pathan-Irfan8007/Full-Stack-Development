let arr = [0, 1, 2, 3, 4];
console.log(arr);

// arr.push(5);
// arr.push(6,7);
// console.log(arr);

// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);

// arr.unshift(10);
// arr.unshift(20);
// console.log(arr);

// arr.shift();
// arr.shift();
// console.log(arr);

// let str = arr.join("-");
// console.log(str);

// let newArr = arr.map(num => num*num);
// console.log(newArr);

let result = arr.filter(num => (num % 2 == 0));
console.log(result, typeof(result));