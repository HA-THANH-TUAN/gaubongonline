"use strict"

const {getValueRedis,setValueRedis} =require('../services/redis.service')

module.exports={
    setValueRedis: async(req, res, next)=>{
        try {
            const {key, payload}=req.body
            return res.json({
                data:await setValueRedis({key, value:JSON.stringify(payload)})
            })
            
        } catch (error) {
            return res.json("error set redis")
            
        }
    }
}