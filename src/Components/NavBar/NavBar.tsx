"use client"
import NavLink from '@/hook/NavLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavBar = () => {
    const patname=usePathname()
    console.log(">>>>>", patname);
    
  return (
    <nav className='bg-[#ff5575] md:block hidden'>
        <ul className='max-w-7xl mx-auto flex items-center justify-between'>
        <li className={`text-[16px] text-white py-3 px-2 rounded-md ${patname=="/" ? "": ""}`}><Link href={"/"}>GẤU TEDDY</Link></li>
        <li className={`text-[16px] text-white py-3 px-2 rounded-md ${patname=="/" ? "": ""}`}><Link href={"/"}>BỘ SƯU TẬP</Link></li>
        <li className={`text-[16px] text-white py-3 px-2 rounded-md ${patname=="/" ? "": ""}`}><Link href={"/"}>HOẠT HÌNH</Link></li>
        <li className={`text-[16px] text-white py-3 px-2 rounded-md ${patname=="/" ? "": ""}`}><Link href={"/"}>THÚ BÔNG</Link></li>
        <li className={`text-[16px] text-white py-3 px-2 rounded-md ${patname=="/" ? "": ""}`}><Link href={"/"}>TRA CỨU ĐƠN HÀNG</Link></li>
        <li className={`text-[16px] text-white py-3 px-2 rounded-md ${patname=="/" ? "": ""}`}><Link href={"/"}>GIỎ HÀNG</Link></li>
        <li className={`text-[16px] text-white py-3 px-2 rounded-md ${patname=="/" ? "": ""}`}><Link href={"/user/sign-up"}>ĐĂNG NHẬP</Link></li>
        </ul>
    </nav>
  )
}
