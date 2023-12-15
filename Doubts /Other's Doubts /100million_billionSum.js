// let sum = 0;
// let maxNumber = 10000000000;

// for (let i=1; i<=maxNumber;i++){
//     sum = sum + i;
//     console.log(i);
// }

// shortSum = (maxNumber*(maxNumber+1))/2

// console.log("The sum arrived by loop calculation is " + sum);

// console.log("The Sum arrived by formula is " + shortSum)

// console.log("The difference between the two is " + (shortSum-sum))

const Big = require('big.js');

let sum = Big(0);
let maxNumber = Big(10000000000);

for (let i = Big(1); i.lte(maxNumber); i = i.plus(1)){
    sum = sum.plus(i);
    console.log(i.toString());
}

let shortSum = maxNumber.times(maxNumber.plus(1)).div(2);

console.log("The sum arrived by loop calculation is " + sum.toString());

console.log("The Sum arrived by formula is " + shortSum.toString())

console.log("The difference between the two is " + shortSum.minus(sum).toString())


// // BigInt
// let sum = 0n; // Use BigInt
// let maxNumber = 1000000000n; // Append 'n' to indicate BigInt

// for (let i=1n; i<=maxNumber;i++){
//     sum += i;
// }

// shortSum = (maxNumber*(maxNumber + 1n))/2n;

// console.log("The sum arrived by loop calculation is " + sum.toString());

// console.log("The Sum arrived by formula is " + shortSum.toString());