

const typeOfCustom =(value)=>Object.prototype.toString.call(value)
const checkType = (value, nameType)=> !(value===undefined&&nameType===undefined) ? `[object ${nameType}]`===typeOfCustom(value) :false

// Modal dataCheck

// const dataCheck={
//     order_number:{
//         _patern:REGEX.EMAIL,
//         _type:"String",
//     },
//     catalog_name:{
//         // _patern:null,
//         _type:"String"
        
//     },
//     thumbnail:{
//         // _patern:null,
//         _type:"String"

//     },
//     isActive:{
//         // _patern:null,
//         _type:"Number",
//         _enum:[0,1]

//     }
// }

const validateField=(dataCheck,dataRequest)=>{

    const checkPatern = (value, patern)=>{
        if(checkType(patern, "RegExp")){
            return patern.test(value)
        }
        console.error("Value is Not RegExp",patern)
        return true
    }
    const checkEnum = (value, _enum )=>{
        if(checkType(_enum , "Array")){
            return _enum.includes(value)
        }
        console.error("Value is Not Array",_enum)
        return true

    }

    return Object.keys(dataRequest).every((prop)=>{
        const isCheckType=dataCheck[prop]._type!==undefined ? checkType(dataRequest[prop],dataCheck[prop]._type):true
        const isCheckPatern=dataCheck[prop]._patern!==undefined ? checkPatern(dataRequest[prop],dataCheck[prop]._patern):true
        const isCheckEnum=dataCheck[prop]._enum!==undefined ? checkEnum(dataRequest[prop], dataCheck[prop]._enum) : true
        const result= isCheckType && isCheckPatern && isCheckEnum
        return result
    })





}

module.exports={validateField}