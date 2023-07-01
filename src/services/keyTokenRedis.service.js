const client=require("../config/redis.config")
class KeyTokenRedis{
    static setKeyToken=async(id, data)=>{
            const resultSet = await client.hSet(`UserTokens:${"1aa8c86b7ef04f021a3f6eb5810b395a343a"}`,Object.entries(data))        
    }
    
    static getKeyToken=async(id)=>{
        try {
            const data= await client.hGet("tokenUsers:user_1",["name","age"],()=>{

            })
            console.log("data get:::: ", data)
        } catch (error) {
            
        }
    }
}

module.exports=KeyTokenRedis