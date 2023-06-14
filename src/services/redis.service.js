const client=require("../config/redis.config")
client.connect()
module.exports={
    getValueRedis: async(key)=>{
        try {
            const data= await client.get(key, (error, result)=>{
                console.log(data)
                return error ? error : result
            })
        } catch (error) {
            console.log("Error ::: ", error)
        }
    },
    setValueRedis: async ({key,value})=>{
        try {

            // return new Promise ((isOke, isError)=>{
            //     client.set(key,value , (error, result)=>{
            //             console.log(data)
            //             return error ? isError(error) : isOke(result)
            //         })
            // })
            console.log("set redis:", {key,value})
            await client.set(key,value, (error, result)=>{
                console.log("sr-set", error);
                return error ? error : result
            });
            
            return "OKE"
        } catch (error) {
            console.log("Error ::: ", error);
            return error
        }
    }
}