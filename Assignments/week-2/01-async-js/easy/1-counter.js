//the counter should increase everysecond 
let counter = 0;

let id = setInterval(() => {
    counter++;
    console.log("The Counter Increased By 1 to: "+ counter);
    if(counter === 5)clearInterval(id);
}, 1000); 