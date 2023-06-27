import { AxiosResponse } from 'axios';
import axiosClient from './axiosClient';

export interface ISignUp{
    name:string,
    email:string,
    password:string
}

export interface ISignIn{
    name:string,
    email:string,
    password:string
}

interface IMessage{
    code:number,
    message:string
}
interface IAuthenApi extends IMessage{
    meta?:{
      user: {
        id: string,
        name: string,
        email: string,
        role_id: number
      },
      refesherToken:string,
      accessToken: string
    }

}

export interface IForgetPassword {
    email:string
}
const userApi={
    signUp(body:ISignUp){
        const url="/authentication"
        console.log(body)
        return axiosClient.post<undefined,IAuthenApi>(`${url}/sign-up`,JSON.stringify(body))
    },
    signIn(body:ISignIn){
        const url="/authentication"
        console.log(body)
        return axiosClient.post<undefined,IAuthenApi>(`${url}/sign-in`,JSON.stringify(body))

    },
    forgetPassword(body:IForgetPassword){
        const url="/user"
        console.log(body)
        return axiosClient.patch<undefined,IMessage>(`${url}/forgetPassword`,JSON.stringify(body))
    }

}

export default userApi