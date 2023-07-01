const authModel=require("../models/auth.model")
const mysql=require("../models/db.model")
const bcrypt = require('bcrypt');
const { uid } =require ('uid');
const jwt=require("jsonwebtoken")
const saltRounds = 10;
const KeyTokenRedis =require("./keyTokenRedis.service")
const {createTokenPair}=require("../utils/auth/authUtils");
const createPriPubKey = require("../utils/auth/createPriPubKey");
const redis=require("../config/redis.config");
const { ConflictResponse, BadResponse, Unauthorized } = require("../core/error.response");

class Auth {
    signUp=async(dataSignUp)=>{
        const isExistEmail= await mysql.query(`SELECT 1 FROM Users WHERE email = '${dataSignUp.email}'`)
            if(isExistEmail[0].length>0) throw new ConflictResponse("email exist")
            const id=uid(36)
            const paswordHash= bcrypt.hashSync(dataSignUp.password, saltRounds)

            await authModel.signUp({...dataSignUp, password:paswordHash,id:id})
            const dataUser= mysql.query(`select id, name, email, role_id from Users where id='${id}'`)
            const [[data]]= await dataUser
            
            if(data){
                const{privateKey,publicKey}=createPriPubKey()
                const {accessToken,refreshToken}=createTokenPair(data, publicKey, privateKey)
                await redis.hSet(`UserTokens:${id}`,Object.entries({refreshToken,publicKey}))   
                    return ({
                                user:data,
                                refesherToken:refreshToken ,
                                accessToken: accessToken,
                            })
            }
    }

    signIn=async(inforUser)=>{
            const [[inforDbUser]]=await authModel.signIn(inforUser.email)
            if(!inforDbUser?.active===0) throw new BadResponse("Your account has been locked", 403)
            if(!inforDbUser) throw new BadResponse("Account yet register", 403)

            if(inforDbUser.email===inforUser.email&&bcrypt.compareSync(inforUser.password,inforDbUser.password)){
                const {password, active, role_id,...dataRes}=inforDbUser
                const {privateKey,publicKey}=createPriPubKey()
                console.log("inforDbUserinforDbUser:::",inforDbUser)
                const {accessToken,refreshToken}=createTokenPair(inforDbUser, publicKey, privateKey)
                await redis.hSet(`UserTokens:${inforDbUser.id}`,Object.entries({refreshToken,publicKey}))   
                return ({
                        user:dataRes,
                        refesherToken:refreshToken ,
                        accessToken: accessToken,
                    })
            }
            else throw new Unauthorized("login failed", 401)
        
    }
    refesherToken=async(id)=>{
        const {privateKey,publicKey}=createPriPubKey()
        const {accessToken,refreshToken}=createTokenPair(inforDbUser, publicKey, privateKey)
        await redis.hSet(`UserTokens:${inforDbUser.id}`,Object.entries({refreshToken,publicKey}))
    }

}

module.exports=new Auth()