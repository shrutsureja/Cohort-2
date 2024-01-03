// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

console.log("---------");

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);
  
  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

console.log("---------");
// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);
  
  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
console.log("---------");
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);
  
  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

console.log("---------");
// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);
concatExample([1, 2, 3], []);

// forEach()
console.log("---------");
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// map()
console.log("---------");
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item,index) {
    console.log(index);
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3,"x"]);

// filter()
console.log("---------");
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
console.log("---------");
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 8;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
console.log("---------");
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);

console.log("---------");

// join()
function joinExample(arr){
  console.log("original array:", arr);

  let z = arr.join("-");
  console.log("After Join:", z);
  console.log("Type of:", typeof z);
}
joinExample(['s', 'h', 'r', 'u', 't']);