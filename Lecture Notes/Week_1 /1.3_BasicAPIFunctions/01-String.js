// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Target String:", target);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "world");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World Wrld", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", "l");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");


function diffInSliceAndSubString(str){
  console.log("When indices are same:", str);
  console.log("After slice:", str.slice(1, 1));
  console.log("After substring:", str.substring(1, 1));

  console.log("When indices are negative");
  // counts from the end of the string 
  console.log("After slice:", str.slice(-2));// output: d!
  //counts from 0
  console.log("After substring:", str.substring(-1));//output: Hello World!
  
  console.log("When indices are in wrong order");
  console.log("After slice:", str.slice(9 ,5));// ignores and gives a empty string 
  console.log("After substring:", str.substring(9,5));// switches the order: , Wo
}
diffInSliceAndSubString("Hello, World!");