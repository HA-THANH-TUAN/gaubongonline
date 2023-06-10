const sql=require("./db")
const User = function(user){
    this.name= user.name;
    this.email=user.email;
    this.password=user.password;
    
}

User.create=(user ,result)=>{
    console.log(">>>>>. da chayj trong model User");
    
}

module.exports=User