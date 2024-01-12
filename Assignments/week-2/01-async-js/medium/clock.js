
setInterval(() => {
    const date = new Date();
    console.clear();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds(); 
    console.log(`${hr}:${min}:${sec}`);
    console.log(`${( hr>12 ? hr-12: hr)}:${min}:${sec} ${(hr>12?'PM':'AM')}`);
}, 1000);