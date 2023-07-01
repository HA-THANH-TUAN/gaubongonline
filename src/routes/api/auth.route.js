"use strict"
const express=require("express")
const router =express.Router()
const authController=require("../../controllers/auth.controller")
const { asyncHandler } = require("../../core/error.response")

router.post("/sign-up", asyncHandler(authController.signUp))


router.post("/sign-in",asyncHandler(authController.signIn))

module.exports=router