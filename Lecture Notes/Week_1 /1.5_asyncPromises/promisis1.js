const { log } = require('console');
const { promises } = require('dns');
const fs = require('fs');
const { resolve } = require('path');

function shrutreadFile(fn){
    fs.readFile("a.txt", "utf-8", function(err, data){
        fn(data);
    });
}

const onDone = (data) => {
    console.log(data);
}

shrutreadFile(onDone);

// time taking 
// Same code with promises

function shrutPromiseReadFile(){
    return new Promise((resolve)=>{
        fs.readFile("a.txt" , "utf-8" , (err , data) => {
            resolve(data);
        });
    })
}

const onDoneWithPromise = (data) =>{
    console.log("Promise Output");
    console.log(data);
}

shrutPromiseReadFile().then(onDoneWithPromise);