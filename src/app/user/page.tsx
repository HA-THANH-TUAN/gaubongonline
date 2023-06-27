"use client"
import React, {useEffect} from 'react';
import { useRouter } from 'next/navigation'
export default function User() {
  const router=useRouter()
  useEffect(()=>{
  router.push("/user/sign-in")
  },[])
 
  return (
    <div>
    </div>
  )
}
