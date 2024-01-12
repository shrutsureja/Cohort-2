const fs = require("fs");
const data = "Hello their this is from the write-to-file.js code writing into a .txt file";


fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
});

setTimeout(() => {
    const a = fs.writeFile("a.txt", data, function (err) {
        if(err) throw err;
        console.log("File changed and saved");
    });        
}, 2000);


setTimeout(() => {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        console.log(data);
    });    
}, 1000);
