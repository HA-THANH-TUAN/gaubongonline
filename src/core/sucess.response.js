"use strict"

const STATUS_CODE={
    OKE:200,
    CREATED:201
}
const REASON_STATUS_CODE={
    CREATED:"create",
    OK: "success"
}
class SuccessResponse {
    constructor(message, statusCode=STATUS_CODE.OKE, reasonStatus=REASON_STATUS_CODE.OK, metadata={}){
        this.message=!message ? reasonStatus : message
        this.code=statusCode
        this.metadata=metadata

    }

    send(res, headers={}){
        return res.status(this.code).json({
            code:this.code,
            message:this.message,
            metadata:this.metadata
        })
    }
}

class OK extends SuccessResponse {
    constructor(message, metadata){
        super(message,STATUS_CODE.OKE, REASON_STATUS_CODE.OK ,metadata)
    }
    
}
class CREATED extends SuccessResponse {
    constructor(message, metadata){
        super(message,STATUS_CODE.CREATED, REASON_STATUS_CODE.CREATED ,metadata)
    }
}


module.exports={OK,CREATED}