const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password : password
    })
    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if the userexist or not
    const response = await Admin.findOne({
        username: username,
        password: password
    }) 
    console.log("response=>"+response);
    if(response){
        const jwtToken = jwt.sign({username:username}, JWT_SECRET);
        res.json({
            token : jwtToken
        })
    }
    else {
        res.status(403).json({msg : "unauthorized"})
    }

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const response = await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })
    res.json({
        message: 'Course created successfully', courseId: response._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({courses: response})
});

module.exports = router;