const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
});

a=0;
for(let i = 0; i<1000000000;i++){
    a+=1;
}
console.log("1000000000 completed");
a=0;
for(let i = 0; i<10000000000;i++){
    a+=1;
}
console.log("100000000000 completed");

a=0;
for(let i = 0; i<1000000000;i++){
    a+=1;
}
console.log("10000000000 completed");
