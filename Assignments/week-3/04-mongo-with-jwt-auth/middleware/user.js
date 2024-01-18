const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require("../config")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    try {
        // console.log(JWT_SECRET);
        const decoded = jwt.verify(jwtToken, JWT_SECRET)
        // console.log(decoded.username);
        if(decoded.username){
            next();
        }
        else {
            res.status(403).json({
                msg:"unauthorized"
            })
        }
    }
    catch(e){
        res.json({
            msg:"bad Input",
            err : e
        })
    }
}

module.exports = userMiddleware;