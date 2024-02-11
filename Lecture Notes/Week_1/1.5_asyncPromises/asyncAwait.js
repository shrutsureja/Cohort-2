const { log } = require("console");
const fs = require("fs");

function shrutPromiseReadFile(){
    console.log("=>Inside the shrutPromiseReadFile");
    return new Promise((resolve)=>{
        log("=>Inside the Promise");
        fs.readFile("aa.txt", "utf-8", (err, data)=>{
            console.log("Inside the readFile function");
            resolve(data);
        });
        xih
        console.log("after the readFile function");
    });
}

async function main(){
    let value = await shrutPromiseReadFile();
    console.log(value);
    console.log("shrutsureja");
    // .then((data)=>{
    //     console.log("data > " + data);
    //     console.log("Inside the .then function");
    // }).catch((e)=>console.log("error =>" + e));
}
main();

log("main"); 