
const {createClient}=require("redis")
require('dotenv').config()

const client =createClient({
    // url:process.env.REDIS_URL
    url:"redis://default:13JZwDkftdEANuT9GCYInMygIxTkytRb@redis-19265.c99.us-east-1-4.ec2.cloud.redislabs.com:19265"
})

// client.on("connect", ()=>{
//     console.log("connect client")
// })
// client.on("error", (error)=>{
//     console.log("connect client fail ",error)
// })

module.exports= client