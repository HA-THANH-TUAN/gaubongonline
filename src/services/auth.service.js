const authModel=require("../models/auth.model")

class Auth {
    signUp=async(dataSignUp)=>{
        try {
            const userInfor = await authModel.signUp(dataSignUp)
            return {
                code: "201",
                message: "Oke"
            }
        } catch (error) {
            console.log(">aus error::: ",error);
            if(error.errno===1062){
                return {
                    code: "401",
                    message: "The account has been registered before"
                }
            }
            else{
                return {
                    code: "500",
                    message: "Server error"
                }
            }
        }
    }
}

module.exports=new Auth()