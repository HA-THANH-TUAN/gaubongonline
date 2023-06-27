"use client"
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import Link from "next/link";
import * as Yup from 'yup'
import classNames from "classnames"
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from 'react-hook-form';
import { BiErrorCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface ISignIn{
  email:string,
  password:string
}
export default function SignIn() {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Không được bỏ trống !')
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email không đúng !"),
    password: Yup.string()
      .required('Không được bỏ trống !'),
  })

  const router=useRouter()
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<ISignIn>({ resolver: yupResolver(formSchema) })

  const handleOnSubmit:SubmitHandler<ISignIn>=(data)=>{

  }
  
    return (
    
            

              <div className=" lg:max-w-xl max-w-sm mx-auto bg-white pb-12 pt-3 px-10 rounded">
                <h1 className="text-center my-6 text-[30px] font-extrabold"><span className="text-blue-600">ĐĂNG </span><span className="text-yellow-400"> NHẬP</span></h1>
                <form className="sm:mx-5 mx-2" onSubmit={handleSubmit(handleOnSubmit)}>
                  <div className="mb-5 flex flex-col">
                    <label htmlFor="" className="font-semibold text-lg">Email</label>
                    <input {...register("email")} onChange={()=>{errors.email&&clearErrors("email")}}
                      className={classNames("px-2 py-2 rounded focus:outline-none border border-solid", 
                      {
                        "border-red-400":Boolean(errors.email)===true,
                        "border-zinc-300":Boolean(errors.email)===false
                      } )}
                      type="text" placeholder="Tài khoản email ..."
                      />
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
                      type="text" placeholder="Mật khẩu của bạn ..."
                      />
                    {errors.password?.message&&<span className="flex flex-wrap items-start text-red-500 mt-2"><span className="pt-[2px] mr-1">{<BiErrorCircle/>}</span>{errors.password.message}</span>}
                  </div>
                  <div className="text-end font-medium mr-2 "><span onClick={()=>{router.push("user/reset")}} className="cursor-pointer inline-block py-1 hover:font-bold">Quên mật khẩu ? </span></div>
                  <div className="text-center my-6"><button type="button" className="bg-orange-500 hover:bg-orange-400 text-white px-2 py-[10px] font-medium rounded w-full">Đăng nhập</button></div>
                </form>
                <div className="text-center mt-3">
                  <h1 className="text-lg mt-5 font-medium">Đăng nhập bằng :</h1>
                  <ul className="flex justify-center mt-2 ">
                    <li className="w-10 hover:opacity-90 hover:cursor-pointer h-10 p-1 sm:mx-5 mx-2 flex justify-center items-center rounded-[50%] bg-zinc-300">< FcGoogle className=" text-4xl"/></li>
                    <li className="w-10 hover:opacity-90 hover:cursor-pointer h-10 p-1 sm:mx-5 mx-2 flex justify-center items-center rounded-[50%] bg-[#0364e2]">< CgFacebook className=" text-4xl text-white"/></li>
                  </ul>
                </div>
                <div className="text-center justify-center items-center mt-12">Bạn chưa có tài khoản ? <Link href={"/user/sign-up"} className="text-lg font-semibold hover:underline hover:font-bold hover:cursor-pointer">Đăng kí</Link> </div>
              </div>
            
    );
  }