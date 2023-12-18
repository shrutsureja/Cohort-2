function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("42px24");
explainParseInt("px24");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42.465p");
explainParseFloat("42px");

let x = 9999999999999998;
let y = "9999999999999999";
console.log(x);
console.log(y.length);


let z1 = 10 + 20;// z will number 30
let z2 = "10" + 20;// z will string 1020
let z3 = "10" + "20";// z will string   1020  
let z4 = 10 + "20";// z will string     1020
let z5 = "the result be-" + 10 + 20;//z will be :the result be-1020
let z6 = 10 + 20 + "20";

console.log("z1 : " + z1 + "\nType of z1:" + typeof z1);
console.log("z1 : " + z2 + "\nType of z1:" + typeof z2);
console.log("z1 : " + z3 + "\nType of z1:" + typeof z3);
console.log("z1 : " + z4 + "\nType of z1:" + typeof z4);
console.log("z1 : " + z5 + "\nType of z1:" + typeof z5);
console.log("z1 : " + z6 + "\nType of z1:" + typeof z6);