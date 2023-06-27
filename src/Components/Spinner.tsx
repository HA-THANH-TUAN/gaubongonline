"use client"
import React,{useEffect}  from 'react'
export default function Spinner() {
    useEffect(()=>{
        document.body.style.overflowY="hidden"
        return ()=>{
            document.body.style.overflowY="inital"
        }
    })
  return (
    <div className='spinner fixed top-0 right-0 bg-[#000000da] w-screen h-screen flex justify-center items-center'> 
        <span className="spinner-main" style={{
            display:"inline-block",
            width:"40px",
            height:"40px",
            borderTop:"4px solid #ff5500",
            borderBottom:"4px solid #ff5500",
            borderRight:"4px solid transparent",
            borderLeft:"4px solid transparent",
            borderRadius:"50%"
        }}>
        </span>
    </div>
  )
}
