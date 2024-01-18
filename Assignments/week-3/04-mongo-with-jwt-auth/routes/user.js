const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require('jsonwebtoken')

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username : username,
        password: password
    })
    res.json({
        msg : "User Created Successfully"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password;

    const userExist = await User.findOne({
        username: username,
        password: password
    })

    if(userExist){
        const jwtToken = jwt.sign({username : username}, JWT_SECRET)
        res.json({
            token : jwtToken
        })
    }
    else {
        res.json({
            msg: "unauthorized"
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courseList = await Course.find({});
    res.json({
        courses : courseList
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const token = req.headers.authorization.split(" ")[1];
    const decodedValue = jwt.decode(token)
    console.log("decodedValue=>"+decodedValue);
    const courseId = req.params.courseId;
    const updatedOrNot = await User.updateOne({
        username : decodedValue.username
    },{
        "$push" : {
            purchasedCourses : courseId
        }
    })
    res.json({message : "Course Purchased Successfully"})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization.split(" ")[1];
    const decodedValue = jwt.decode(token);
    const userDetails = await User.findOne({username : decodedValue.username})
    const userCourses = await Course.find({
        _id : {
            "$in" : userDetails.purchasedCourses
        }
    })
    res.json({purchasedCourses : userCourses});
});

module.exports = router