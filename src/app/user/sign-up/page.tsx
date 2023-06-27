"use client"
import Spinner from "@/Components/Spinner";
import userApi from "@/api/userApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import classNames from "classnames"
import Notify from "@/Components/Notify";
import {CgCloseO} from "react-icons/cg"

type ISignUp={
  name: string,
  email:string,
  password: string,
  verifyPassword: string,
}
export default function SignUp() {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Không được bỏ trống !')
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email không đúng !"),
    name: Yup.string()
      .required('Không được bỏ trống !'),
    password: Yup.string()
      .required('Không được bỏ trống !'),
    verifyPassword: Yup.string()
      .required('Không được bỏ trống !')
      .oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp !'),
  })
  const [isFailApi, setIsFailApi]=useState(false)
  const [loading, setLoading]=useState(false)
  const [contentError,setContentError]=useState<string>("")
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<ISignUp>({ resolver: yupResolver(formSchema) })
  useEffect(()=>{
    // const CallApi=async()=>{
    //   const data=await authenApi.signUp()
    //   console.log("data::: ", data)
    // }
    // CallApi()
  })

  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    const {verifyPassword, ...body}=data
    const signUpApi=async()=>{
      try {
        setLoading(true)
        const result=await userApi.signUp(body)
        console.log("result ::: ", result)
        if(result.code===201){
          setContentError("")
        }
        else{
          setIsFailApi(true)
          result.code===500 ?
          setContentError("Lỗi hệ thống !"):
          result.code===401 ?
          setContentError("Tài khoản đã tồn tại !"):null
        }
        
      } catch (error) {
        setIsFailApi(true)
        setContentError("Lỗi hệ thống !")
        
      }
      finally{
        setLoading(false)
      }
    }
    signUpApi()
    
  }
    return (
      <div className="max-w-7xl mx-auto">
        {isFailApi&&<Notify
          icon={<CgCloseO/>}
          content={contentError}
          handleClick={()=>{setIsFailApi(false)}}
          contentButton="Thử lại"
          colorIcon="red"
          
        />}
        {loading&&<Spinner/>}
        <div className="flex justify-center">
          <div className="w-full">
            <div className="max-w-xl mx-auto bg-white pb-8 pt-3 md:px-14 sm:px-10 px-3 rounded">
              <h1 className="text-center my-6 text-[30px] font-extrabold"><span className="text-blue-600">ĐĂNG </span><span className="text-yellow-500"> KÍ</span></h1>
              <form onSubmit={(e)=>{ e.preventDefault();handleSubmit(onSubmit)()}} className="sm:mx-5 mx-2">
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Họ và tên</label>
                  <input {...register("name")} onChange={()=>{errors.name&&clearErrors("name")}}
                    className={classNames("px-2 py-2 rounded focus:outline-none border border-solid", 
                    {
                      "border-red-400":Boolean(errors.name)===true,
                      "border-zinc-300":Boolean(errors.name)===false
                    } )}
                    type="text" placeholder="Họ và tên của bạn ..."/>
                  {errors.name?.message&&<span className="flex flex-wrap items-start text-red-500 mt-2"><span className="pt-[2px] mr-1">{<BiErrorCircle/>}</span>{errors.name.message}</span>}
                </div>
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Email</label>
                  <input {...register("email")} onChange={()=>{errors.email&&clearErrors("email")}}
                    className={classNames("px-2 py-2 rounded focus:outline-none border border-solid", 
                    {
                      "border-red-400":Boolean(errors.email)===true,
                      "border-zinc-300":Boolean(errors.email)===false
                    } )}
                    type="text" placeholder="Tài khoản email ..."/>
                  {errors.email?.message&&<span className="flex flex-wrap items-start text-red-500 mt-2"><span className="pt-[2px] mr-1">{<BiErrorCircle/>}</span>{errors.email.message}</span>}
                </div>
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Mật khẩu</label>
                  <input {...register("password")} onChange={()=>{errors.password&&clearErrors("password")}}
                    className={classNames("px-2 py-2 rounded focus:outline-none border border-solid", 
                    {
                      "border-red-400":Boolean(errors.password)===true,
                      "border-zinc-300":Boolean(errors.password)===false
                    } )}
                    type="text" placeholder="Mật khẩu của bạn ..."/>
                  {errors.password?.message&&<span className="flex flex-wrap items-start text-red-500 mt-2"><span className="pt-[2px] mr-1">{<BiErrorCircle/>}</span>{errors.password.message}</span>}
                </div>
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Xác nhập mật khẩu</label>
                  <input {...register("verifyPassword")} onChange={()=>{errors.verifyPassword&&clearErrors("verifyPassword")}}
                    className={classNames("px-2 py-2 rounded focus:outline-none border border-solid", 
                    {
                      "border-red-400":Boolean(errors.verifyPassword)===true,
                      "border-zinc-300":Boolean(errors.verifyPassword)===false
                    } )}
                    type="text" placeholder="Mật khẩu của bạn ..."/>
                  {errors.verifyPassword?.message&&<span className="flex flex-wrap items-start text-red-500 mt-2"><span className="pt-[2px] mr-1">{<BiErrorCircle/>}</span>{errors.verifyPassword.message}</span>}
                </div>
                <div className="text-end font-medium mr-2 "><span className="cursor-pointer inline-block py-1 hover:font-bold">Quên mật khẩu ? </span></div>
                <div className="text-center mt-10"><button type="submit" className="bg-orange-500 hover:bg-orange-400 text-white px-2 py-[10px] font-medium rounded w-full">Đăng kí</button></div>
              </form>
              <div className="text-center justify-center items-center mt-10">Bạn đã có tài khoản ? <Link href={"/user/sign-in"} className="text-lg font-semibold hover:underline hover:font-bold hover:cursor-pointer">Đăng nhập</Link> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }