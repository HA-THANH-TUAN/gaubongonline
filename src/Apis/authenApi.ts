import axiosClient from "./axiosClient"

export interface IFormLoginAdmin {
    email: string,
    password: string
}
//  interface IReqLoginAdmin extends IFormLoginAdmin {
    
    
    
// }
class AuthenApi {
    static loginAdmin=(data:IFormLoginAdmin)=>{
        return axiosClient.post("authentication/sign-in",data)
    }
}

export default AuthenApi
