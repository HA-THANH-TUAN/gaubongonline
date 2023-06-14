
const authService = require("../services/auth.service")
const bcrypt = require('bcrypt');
const { uid } =require ('uid');
const saltRounds = 10;
const checkfieldSignUp=()=>{
    
}

class Auth {
    signUp=async(req, res,next)=>{
        try {
            console.log("start");
            
            bcrypt.hash(req.body.password, saltRounds, async(error, result)=>{
                if(error){
                    console.log('erorr')
                }
                else{
                    console.log(result)
                    res.status(200).json(await authService.signUp({...req.body, password:result,id:uid(36)}))
                }
            })
            console.log(">auc Sign-up body ::: ",req.body);
            
            
            
        } catch (error) {
            res.status(401).json({
                code: 401,
                message: "xxx",
            })
        }
    }
}

module.exports=new Auth()