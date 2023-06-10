import React, { useEffect, useState } from 'react'
import {RxPinTop} from "react-icons/rx"
import {TbArrowBarToUp} from "react-icons/tb"
declare global {
  interface Window { MyNamespace: any; }
}



const GoToTop = () => {

  const [isTop, setIsTop]=useState<boolean>(false)
  console.log(">>>> Dat", isTop);
  const debounce = (cb:any, delay:any)=>{
    clearTimeout(window.MyNamespace)
    window.MyNamespace=setTimeout(()=>{cb()}, delay)
  }

  const handleOnScroll=()=>{
    if(window.pageYOffset>100){
      console.log(window.pageYOffset)
      setIsTop(true)
    }
    else{
      setIsTop(false)
    }
  }
  useEffect(() => {
    window.onscroll=()=>{
      debounce(handleOnScroll,100)
      
    }
  }, [])
  

  return (
    <div className="fixed bottom-16 right-5  z-[1999]">
      {isTop&&<span onClick={()=>{window.scrollTo({top: 0, left: 0,})}} className=" w-9 h-12 md:hover:bg-red-500 hover:cursor-pointer rounded-t-md bg-orange-600 flex justify-center items-center text-2xl text-white"><TbArrowBarToUp/></span>}
    </div>
  )
}

export default GoToTop