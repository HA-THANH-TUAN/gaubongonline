import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import Link from "next/link";
export default function SignIn() {
    return (
      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="max-w-sm mx-auto bg-zinc-100 pb-12 pt-3 rounded">
              <h1 className="text-center mb-6 text-[30px] font-bold">Đăng Nhập</h1>
              <form className="sm:mx-5 mx-2">
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Email</label>
                  <input className="px-2 py-2 rounded focus:outline-none " type="text" placeholder="Tài khoản email ..."/>
                </div>
                <div className="mb-5 flex flex-col">
                  <label htmlFor="" className="font-semibold text-lg">Mật khẩu</label>
                  <input className="px-2 py-2 rounded focus:outline-none " type="text" placeholder="Mật khẩu của bạn ..."/>
                </div>
                <div className="text-end font-medium mr-2 "><span className="cursor-pointer inline-block py-1 hover:font-bold">Quên mật khẩu ? </span></div>
                <div className="text-center mt-12"><button type="button" className="bg-orange-500 hover:bg-orange-400 text-white px-2 py-[10px] font-medium rounded">Đăng nhập</button></div>
              </form>
              <div className="text-center mt-3">
                <h1 className="text-lg mt-5 font-medium">Đăng nhập bằng :</h1>
                <ul className="flex justify-center mt-2 ">
                  <li className="w-10 hover:opacity-90 hover:cursor-pointer h-10 p-1 sm:mx-5 mx-2 flex justify-center items-center rounded-[50%] bg-zinc-300">< FcGoogle className=" text-4xl"/></li>
                  <li className="w-10 hover:opacity-90 hover:cursor-pointer h-10 p-1 sm:mx-5 mx-2 flex justify-center items-center rounded-[50%] bg-[#0364e2]">< CgFacebook className=" text-4xl text-white"/></li>
                </ul>
              </div>
              <div className="text-center justify-center items-center mt-16">Bạn chưa có tài khoản ? <Link href={"/user/sign-up"} className="text-lg font-semibold hover:underline hover:font-bold hover:cursor-pointer">Đăng kí</Link> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }