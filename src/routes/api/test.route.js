const express=require("express")
const router = express.Router()
const {setValueRedis}=require("../../controllers/redis.controller")
router.put("/setredis",setValueRedis)


module.exports=router