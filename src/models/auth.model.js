const mysqlPool=require("../models/db.model")
class Auth {
    getInforUser=async(id, email)=>{
        const sql= email ? `select id, name, email,password,active, role_id from Users where email='${email}'`:
        `select id, name, email, role_id from Users where id="${id}"`
        return await mysqlPool.query(sql)
    }
    signUp=async(dataSignUp)=>{
        const sql=`INSERT INTO Users (${Object.keys(dataSignUp)}) VALUES ('${Object.values(dataSignUp).join("','")}')`
        const data=await mysqlPool.query(sql)
    }

    signIn=async(email)=>{
        return await this.getInforUser(undefined,email)
    }
}
module.exports=new Auth()