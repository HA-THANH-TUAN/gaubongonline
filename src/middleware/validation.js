class Validation {
    static isEmty = (data)=>{
        return data ? true : false 
    }
    static isMininumLength = (number)=>{
        return data?.length >= number
    }
    static isPattern = (data, pattern)=>{
        rex=new RegExp()
        return rex.test(data)
    }
}