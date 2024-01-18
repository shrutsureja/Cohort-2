const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const userCreated = await User.create({
        username,
        password
    })
    console.log("userCreated:" + userCreated);
    if(userCreated)
    res.json({ message: 'User created successfully' })
    else {
        res.json({err : userCreated , msg: "User not Created"})
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({courses : response})
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourses: courseId
        }
    })

    res.json({ message: 'Course purchased successfully' })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const userDetails = await User.findOne({username : req.headers.username});

    const courses = await Course.find({
        _id :{
            "$in" : userDetails.purchasedCourses
        }
    })
    res.json({ purchasedCourses : courses});
});

module.exports = router