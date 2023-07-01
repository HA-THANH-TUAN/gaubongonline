const redis=require("../config/redis.config");
const jwt=require("jsonwebtoken")

const folderRedisUser="UserTokens"
const verifyJwt=async(dataReq)=>{
    if(dataReq.user_id){
        const data = redis.HGETALL(`${folderRedisUser}:${dataReq.id}`)
        console.log("GET OKE data :::", data)
    }
    // const result =await new Promise((result, reject)=>{
    //     jwt.verify(accessToken, publicKey,(err,decode)=>{
    //         err ? console.log("error verify ::: ", err) :console.log("decode verify :::", decode)
    //     })
    // })
}

module.exports=verifyJwt