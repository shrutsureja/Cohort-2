const { error } = require('console');
const fs = require('fs');
fs.readFile('a.txt', 'utf-8', function(err, data){
    console.log(data);
});

setTimeout(() => {
    console.log('from timeout');
}, 60);// less than 20 then this runs first 

console.log('Hello');
