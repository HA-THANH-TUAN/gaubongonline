"use client"
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Link  from 'next/link';

export default function ExampleClientComponent() {
    const router = useRouter();
    const searchParams:any = useSearchParams();
    const pathname:any = usePathname();
    const params:any = useParams();
   
    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);

   
        return params.toString();
      },
      [searchParams],
    );
  //  console.log(">>>> [id] searchParams ",searchParams)
  //  console.log(">>>> [id] pathname ",pathname)
  //  console.log(">>>> [id] params ",params)
 

  //  for(let i of searchParams.entries()){
  //   console.log(">>>entries Items",i)
  //  }

    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
        <div className="max-w-sm bg-orange-400">
          <h1>Đăng nhập</h1>
          <form>
            <div className="mb-5">
              <label htmlFor="">Email: </label>
              <input type="text" placeholder="Tài khoản email ..."/>
            </div>
          
            <div className="mb-5">
              <label htmlFor="">Mật khẩu: </label>
              <input type="text" placeholder="Tên của bạn ..."/>
            </div>

            <div><button type="submit" className="bg-pink-500 px-2 py-1 font-bold rounded ">Đăng nhập</button></div>

          </form>
        </div>
        </div>
     
      </div>
    );
  }