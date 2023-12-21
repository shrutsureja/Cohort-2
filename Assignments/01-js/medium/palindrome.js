/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let temp = "";
  for(let i = 0; i < str.length ; i++){
    if((str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122) || (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)){
      temp+=str[i];
    }
  }
  str = temp;
  //brute force solution
  
  // let str1 = "";
  // for(let i = str.length - 1; i >= 0 ; i--){
  //     str1+=str[i];
  // }
  // console.log("Original Str : "+ str);
  // console.log("reverse Str2 : "+ str1);
  
  // return str1===str;
  
  // Optimized solution
  // for(let i = 0; i < (str.length)/2 ; i++){
  //   if(str[i] === str[str.length-1-i]){
  //     continue;
  //   }
  //   else return false;
  // }
  // return true;

  //JS method
  let str2 = str.split("").reverse().join("");
  // console.log("Original Str : "+ str);
  // console.log("reverse Str2 : "+ str2);
  return str2===str;
}

module.exports = isPalindrome;
