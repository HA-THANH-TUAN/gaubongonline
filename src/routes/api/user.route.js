const express = require('express')
const router = express.Router()
const cors = require('cors')
// const userController=require("../../controllers/user.controllers")

// router.get('/login',()=>{console.log(">>>>>>>>>.zo loign routre");})
// router.get('/login',userController.login

// )

router.get('/',(req, res)=>{
    res.json("zo ap")

}

)

router.post('/register', (req, res) => {
    res.json('register')
})
router.post('/login', (req, res) => {
    console.log("this is body ::: ",req.body);
    res.json(JSON.stringify(req.body))
})

router.put('/changePassword', (req, res) => {
    res.json('changePassword')
})

router.put('/forgetPassword', (req, res) => {
    res.json('forgetPassword')
})

module.exports = router