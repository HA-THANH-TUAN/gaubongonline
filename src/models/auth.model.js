const mysqlPool=require("../models/db.model")
class Auth {
    signUp=async(dataSignUp)=>{
        const data=await new Promise((result, reject)=>{
            // console.log(">>>>dataSignUp::",dataSignUp);
            console.log(Object.values(dataSignUp));
            console.log(`INSERT INTO Users (${Object.keys(dataSignUp)}) VALUES ('${Object.values(dataSignUp).join("','")}')`);
            const sql=`INSERT INTO Users (${Object.keys(dataSignUp)}) VALUES ('${Object.values(dataSignUp).join("','")}')`
            mysqlPool.query(sql, (error, data)=>{
                if(error){
                    reject(error)
                    console.log(">acm error ::: ", error)
                }
                else{
                    result(data)
                    console.log(">acm email ::: ", data)
                }
            })
        })
        return data
    }
}
module.exports=new Auth()