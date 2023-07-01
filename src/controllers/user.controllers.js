const userService=require("../services/user.service")

class User {
    forgetPassword=(req, res)=>{
        const urlRequest=req.headers.referer
        const email=req.body.email
        const resultService= userService.forgetPassword(urlRequest, email)
    }
}
 module.exports= new User()