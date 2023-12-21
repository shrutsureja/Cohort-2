/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(num) {
    let largest = num[0];
    for(let i = 0; i < num.length; i++){
        if(num[i] > largest) largest = num[i];
    }
    return largest;
}

module.exports = findLargestElement;