const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    data = data.split(' ').filter(function(str) {
        return str.length > 0;
    }).join(' ');
    console.log(data);
    fs.writeFile("a.txt", data, (err)=>{if(err)throw err});
});
