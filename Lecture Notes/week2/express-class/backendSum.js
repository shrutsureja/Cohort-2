const express = require('express')
const app = express();
const port = 3000;

function calculateSum(n){
    let ans = 0;
    for (let i = 1; i <= n; i++){
        ans+=i;
    }
    return ans;
}

app.get('/',function(request, response){
    console.log("Request : " + request);
    console.log("request.query : " + request.query);
    console.log("request.query.n : " + request.query.n);
    let ans = calculateSum(request.query.n);
    console.log(ans);
    response.send({ans});    
});

app.listen(port, ()=>{
    console.log("The port is listining on : " + port);
})