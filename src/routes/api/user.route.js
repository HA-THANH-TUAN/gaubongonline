const express = require('express')
const router = express.Router()
const cors = require('cors')
const userController=require("../../controllers/user.controllers")


router.get('/',(req, res)=>{
    res.json("zo ap")
})

router.post('/forgetPassword', userController.forgetPassword)



router.patch('/forgetPassword', userController.forgetPassword)

router.patch('/changePassword', (req, res) => {
    res.json('changePassword')
})


module.exports = router