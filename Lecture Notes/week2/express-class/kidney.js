const express = require('express');

const app = express();
const port = 3000;
const user = [{
    name:"Shrut",
    kidneys: [{
        healthy:false
    },{
        healthy:true
    }]
}]

app.use(express.json());

app.get('/', function(req, res){
    const userKidneys = user[0].kidneys;
    const numberOfKidneys = userKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0 ; i < numberOfKidneys ; i++){
        if(userKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.send({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthKidneys,
    })
});

app.post('/', function(req, res){
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!!"
    })
});

app.put('/', function(req, res){
    for(let i = 0; i < user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.sendStatus(200);
});

app.delete('/', function(req, res){
    let atLeastOneUnhealthyKidney = false;
    for(let i = 0; i < user[0].kidneys.length;i++)
    {
        if(user[0].kidneys[i].healthy === false){
            atLeastOneUnhealthyKidney = true
        }
    }
    if(atLeastOneUnhealthyKidney===false)res.status(411).json({});
    user[0].kidneys = user[0].kidneys.filter(x => {
        if(x.healthy===true) return true;
        else return false;
    })
    res.sendStatus(200);
});

app.listen(port, ()=>{
    console.log("Listining on the port " + port);
})