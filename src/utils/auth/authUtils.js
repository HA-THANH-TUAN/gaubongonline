const jwt=require("jsonwebtoken")
const algorithm="RS256"

const createTokenPair=(payload,publicKey, privateKey)=>{
        const accessToken=jwt.sign(payload, privateKey,{expiresIn:60*60*2,algorithm})
        const refreshToken=jwt.sign(payload, publicKey,{expiresIn:"7 days"})
      
        return {
            accessToken,refreshToken
        }
}

module.exports={createTokenPair}