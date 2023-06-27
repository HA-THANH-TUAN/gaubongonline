"use client"
import { SubmitHandler, useForm } from "react-hook-form"
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames"
import userApi from "@/api/userApi";
import {IForgetPassword} from "@/api/userApi"
import { useState } from "react";
import Spinner from "@/Components/Spinner";
import Notify from "@/Components/Notify";
import {INotify} from "@/Components/Notify";
import {BsCheckCircle} from "react-icons/bs"
import {CgCloseO} from "react-icons/cg"


const Reset=()=>{
    const formSchema=Yup.object().shape({
        email:Yup.string().required('Không được bỏ trống !')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email không đúng !"),
    })

    const [isFailApi, setIsFailApi]=useState(false)
    const [isNotify, setIsNotify]=useState(false)
    const [isLoading, setIsLoading]=useState(false)
    const [propsNoity, setPropsNotify]=useState<INotify>({
        icon:"",
        content:"",
        contentButton:"",
        colorIcon:""
    })
    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
      } = useForm<IForgetPassword>({ resolver: yupResolver(formSchema) })

      const handleResetPassword:SubmitHandler<IForgetPassword> =(data)=>{
        const fetchApi= async(data:IForgetPassword)=>{
            try {
                setIsFailApi(false)
                setIsLoading(true)
                setPropsNotify({
                    icon:<BsCheckCircle/>,
                    content: <p className="text-center">Hãy vào email của bạn <br/> Liên kết chỉ tồn tại 10 phút !</p>,
                    contentButton:"Thoát",
                    colorIcon:"green"
                })
                await userApi.forgetPassword(data)
            } catch (error) {
                setIsFailApi(true)
                setPropsNotify({
                    icon:<CgCloseO/>,
                    content: "Lỗi hệ thống !",
                    contentButton:"Thử lại",
                    colorIcon:"orange"
                })
            }
            finally{
                setIsNotify(true)
                setIsLoading(false)
            }
        }
        fetchApi(data)
      }
    return <div>
                {isLoading&&<Spinner/>}
                {isNotify&&<Notify
                  {...propsNoity}
                    handleClick={()=>{setIsNotify(false)}}
                />}
                <div className="max-w-xl mx-auto py-10 sm:px-10 px-2 bg-white text-center">
                    <h1 className="text-2xl font-bold text-yellow-400 mb-10">QUÊN MẬT KHẨU</h1>
                    <p className="my-5">Vui lòng nhập địa chỉ email đã đăng ký của bạn. Chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu.</p>
                    {errors.email?.message&&<p  className="text-red-500 px-3 py-2 font-semibold mb-5 bg-[#ff002b14] rounded">{errors.email.message}</p>} 
                    <form className="flex-col flex sm:flex-row" onSubmit={handleSubmit(handleResetPassword)} >
                        <div className="flex-1">
                            <div>
                                <input {...register("email")} placeholder="Nhap email ..."
                                    className={classNames("w-full px-4 rounded-sm h-10 border border-soild focus:outline-none",
                                    {
                                        "border-zinc-400":Boolean(errors.email?.message)===false,
                                        "border-red-500":Boolean(errors.email?.message)===true
                                    })}></input></div>
                        </div>
                        <button className="px-4 py-2 rounded-sm bg-orange-500 font-semibold text-white sm:ml-4 ml-0 mt-3 sm:mt-0  " type="submit">Send</button>
                    </form>

                </div>
            </div>
   
}
export default Reset