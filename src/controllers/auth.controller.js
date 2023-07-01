
const authService = require("../services/auth.service")
const {OK, CREATED}=require("../core/sucess.response")
const verifyJwt = require("../helpers/verifyJwt")
class Auth {
    signUp=async(req, res,next)=>{
            const message = await authService.signUp(req.body)
            new CREATED("Registered OK", message).send(res)
    }

    signIn=async(req, res, next)=>{
            const dataReq=req.body
            console.log(req.data)
            const message=await authService.signIn(dataReq)
        //     await verifyJwt(dataReq)
            new OK("OK", message).send(res)

    }
}

module.exports=new Auth()