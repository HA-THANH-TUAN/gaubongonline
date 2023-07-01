"use strict"

const statusCode={
    FORBIDDEN:403,
    CONFLICT:409,
    UNAUTHORIZED: 401
}
const messageStatusCode={
    FORBIDDEN:"Bad request error",
    CONFLICT:"conflict error",
    UNAUTHORIZED:"Unauthorized"
}


class ErrorRespone extends Error {
    constructor (message, status){
        super(message)
        this.status=status
    }
}

class ConflictResponse extends ErrorRespone {
    constructor(message=messageStatusCode.CONFLICT, status=statusCode.FORBIDDEN){
        super(message, status)
    }
}

class BadResponse extends ErrorRespone {
    constructor(message=messageStatusCode.FORBIDDEN, status=statusCode.FORBIDDEN){
        super(message, status)
    }
}
class Unauthorized extends ErrorRespone {
    constructor(message=messageStatusCode.UNAUTHORIZED, status=statusCode.UNAUTHORIZED){
        super(message, status)
    }
}
const asyncHandler=(controler)=>{
    return (req, res, next)=>{
        controler(req, res, next).catch(next)
    }
}

module.exports={
    ConflictResponse, BadResponse,asyncHandler,Unauthorized
}
