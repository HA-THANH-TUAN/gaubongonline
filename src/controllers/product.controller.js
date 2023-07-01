const { CREATED } = require("../core/sucess.response")
const { BadResponse } = require("../core/error.response")
const { REGEX } = require("../utils/regexPartern")
const { validateField } = require("../utils/validateField")

const productService= require("../services/product.service")
const verifyJwt = require("../helpers/verifyJwt")
const dataCheckAddCatalog={
    order_number:{
        _patern:REGEX.EMAIL,
        _type:"String",
    },
    catalog_name:{
        // _patern:null,
        _type:"String"
        
    },
    thumbnail:{
        // _patern:null,
        _type:"String"

    },
    isActive:{
        // _patern:null,
        _type:"Number",
        _enum:[0,1]

    }
}
class Product {
    addCatalog=async(req, res, next)=>{
        const dataReq=req.body
        console.log("controller prodcut:::",req)
        // const isValidate= validateField(dataCheckAddCatalog ,dataReq)
        const isValidate=true
        // console.log("isValidate:::",isValidate)
        // verifyJwt()
        if(!isValidate) {
            throw new BadResponse("Create Failed")
        }
        await productService.addCatalog(dataReq)
        new CREATED("Created OK").send(res) 
        console.log(">>>> under")
       
        
    }
}

module.exports=new Product()