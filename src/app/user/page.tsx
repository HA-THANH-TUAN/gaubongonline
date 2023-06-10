"use client"
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
export default function User() {
  const router=useRouter()
  const array:number[]=[0]
  const [number, setNumber]=useState(0)
  console.log(">>>>>>0",router);
  
  return (
    <div>
      <button onClick={()=>{setNumber(number+1)}} className='bg-orange-500 mx-2 my-1 py-1 px-2 text-white rounded '>Tăng</button>
      <span>{number}</span>
      <button onClick={()=>{setNumber(number-1)}} className='bg-orange-500 mx-2 my-1 py-1 px-2 text-white rounded '>Giảm</button>

      <Link href={'/'}>Link</Link>
    </div>
  )
}
