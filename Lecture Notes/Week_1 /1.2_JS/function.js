// function sum(a,b){
//     return a+b;
// }

// const value = sum(1,1);
// console.log(value)
// ---------------------------
// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// const ans = sum(1,2 , displayResult);


function calculateArithmetic(a,b, fnToCall){
    // if(type == "sum"){
    //     return a+b;
    // }
    // if(type == "minus"){
    //     return a-b;
    // }

    const ans = fnToCall(a,b);
    return ans;
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a - b;
}

const val = calculateArithmetic(1,1,sum);
//DOUBT : where to use, real usecase not albe to understand

