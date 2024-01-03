const fs = require("fs");

function shrutReadFile(){
    console.log("inside the shrutReadFile function ");
    return new Promise((resolve) => {
        console.log("Inside the promise");
        
        const data = "Hoola aamigos, let get shit done."
        console.log("this is the data: " , data);
        // resolve(data);
        // this is a asynchronous function so that it 
        fs.readFile("aa.txt" , "utf-8", (err, data)=>{
            resolve(data);
            console.log("inside the fs.readFile");
        });
       xit
        console.log("After the readFile function");
    });
    // return p;
}

let finalresult = "";

const onDone = (data) =>{
    // console.log("OnDone:"+data);
    finalresult = data;
}
console.log("before calling the function");
const a = shrutReadFile();
console.log(a);
console.log("------");
console.log(a);

a.then(onDone).catch((e)=>{
    console.log("Error shrut: " + e);
});

console.log(a);

setTimeout(function(){
    console.log(a);
},3000);