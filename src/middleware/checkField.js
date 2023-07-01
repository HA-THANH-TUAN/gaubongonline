const checkField=(json,listField)=>Object.keys(json).every(value=>listField.includes(value))
module.exports=checkField