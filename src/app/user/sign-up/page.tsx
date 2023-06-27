"use client"
import Spinner from "@/Components/Spinner";
import authenApi from "@/api/authenApi";
import Link from "next/link";
import { useEffect } from "react";
export default function SignUp() {
  console.log(process.env.API_URL)
  useEffect(()=>{
    const CallApi=async()=>{
      const data=await authenApi.signUp()
      console.log("data::: ", data)
    }
    CallApi()
  })
    return (
      <div className="max-w-7xl mx-auto mt-10">
        <Spinner/>
        <div className="flex justify-center">
          <div className="w-full">
            <div className="max-w-sm mx-auto bg-zinc-100 pb-8 pt-3 rounded">
              <h1 className="text-center mb-6 text-[30px] font-bold">Đăng kí</h1>
              <form className="sm:mx-5 mx-2">
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Họ và tên</label>
                  <input className="px-2 py-2 rounded focus:outline-none " type="text" placeholder="Họ và tên của bạn ..."/>
                </div>
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Email</label>
                  <input className="px-2 py-2 rounded focus:outline-none " type="text" placeholder="Tài khoản email ..."/>
                </div>
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Mật khẩu</label>
                  <input className="px-2 py-2 rounded focus:outline-none " type="text" placeholder="Mật khẩu của bạn ..."/>
                </div>
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Xác nhập mật khẩu</label>
                  <input className="px-2 py-2 rounded focus:outline-none " type="text" placeholder="Xác nhận mật khẩu ..."/>
                </div>
                <div className="text-end font-medium mr-2 "><span className="cursor-pointer inline-block py-1 hover:font-bold">Quên mật khẩu ? </span></div>
                <div className="text-center mt-10"><button type="button" className="bg-orange-500 hover:bg-orange-400 text-white px-2 py-[10px] font-medium rounded">Đăng kí</button></div>
              </form>
              <div className="text-center justify-center items-center mt-10">Bạn đã có tài khoản ? <Link href={"/user/sign-in"} className="text-lg font-semibold hover:underline hover:font-bold hover:cursor-pointer">Đăng nhập</Link> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }