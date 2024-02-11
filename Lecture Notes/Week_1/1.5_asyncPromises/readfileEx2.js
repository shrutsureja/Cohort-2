const fs = require('fs');

fs.readFile('a.txt', 'utf-8' , (err,data)=>{
    console.log(data);
    let a = 0;
    for(let i = 0; i < 10000000000; i++){
        a++;
    }
    console.log('exe complete');
}); // takes approx less than 50 milli seconds to read learned that by running another program

console.log('hii there 1');

fs.readFile('a.txt', 'utf-8' , (err,data)=>{
    console.log(data + "from another readFile");
});
//time taking function 
// let a = 0;
// for(let i = 0; i < 10000000000; i++){
//     a++;
// }

console.log('hi there 2');

//time taking function 
// let b = 0;
// for(let i = 0; i < 10000000000; i++){
//     b++;
// }

//37:48

console.log('hi there 3');

//doubt 
/* why is the output :
hii there 1
hi there 2
hi there 3
Hi there from a.txt


why is the oupput not 


hii there 1
hi there 2
Hi there from a.txt
hi there 3

*/