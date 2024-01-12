let count = 0;

function counter(){
    count++;
    console.log(`counter : ${count}`);
    setTimeout(counter(), 1000);
}

counter();