import React,{useState} from 'react'
import Messenger from './Icons/messeger'
import Zalo from './Icons/zalo'
import { BsChatDotsFill } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'
import { IoCallSharp } from 'react-icons/io5'

const Contact = () => {
  const [isContact, setIsContact]=useState<boolean>(false)
  return (
    <div className={`${isContact  ? "fixed bg-[#000000c7] h-screen w-screen z-[2000] top-0 right-0":""}`}>
      <div className=' flex items-center absolute bottom-36 right-4'>
        <ul className="flex justify-center flex-col mr-2">
          <li className={`${isContact ?"":"invisible"} flex justify-end items-center`}><span className="mr-3 font-medium text-white">Gọi miễn phí</span><span className='hover:cursor-pointer hover:bg-blue-900 bg-blue-600 my-1 w-10 h-10 flex items-center justify-center rounded-[50%]'> <IoCallSharp className='text-white text-2xl'/></span></li>
          <li className={`${isContact ?"":"invisible"} flex justify-end items-center mr-8`}><span className="mr-3 font-medium text-white">Chat Messenger</span><span className='hover:cursor-pointer  hover:bg-blue-900 bg-blue-600 my-1 w-10 h-10 flex items-center justify-center rounded-[50%]'><Messenger/></span></li>
          <li className={`${isContact ?"":"invisible"} flex justify-end items-center mr-8`}><span className="mr-3 font-medium text-white">Chat Zalo</span><span className='hover:cursor-pointer hover:bg-blue-900 bg-blue-600 my-1 w-10 h-10 flex items-center justify-center rounded-[50%]'><Zalo/></span></li>
          <li className={`${isContact ?"":"invisible"} flex justify-end items-center`}><span className="mr-3 font-medium text-white">Chat ngay</span><span className='hover:cursor-pointer  hover:bg-blue-900 bg-blue-600 my-1 w-10 h-10 flex items-center justify-center rounded-[50%]'><BsChatDotsFill className='text-white text-[26px]'/></span></li>
        </ul>
        <button onClick={()=>{setIsContact(state=>(!state))}} className={`w-12 h-12 hover:bg-red-500 bg-red-700 rounded-[50%] hover:cursor-pointer flex justify-center items-center ${isContact ?"" : "fixed bottom-36 right-4 z-30"}`}>
          {
            isContact?<span className='text-2xl text-white'><VscChromeClose/></span>: 
            <ul className='flex justify-center items-center'>
              <li className='w-[5px] h-[5px] mx-[1px] rounded-[50%] bg-white'></li>
              <li className='w-[5px] h-[5px] mx-[1px] rounded-[50%] bg-white'></li>
              <li className='w-[5px] h-[5px] mx-[1px] rounded-[50%] bg-white'></li>
            </ul>
          }
        </button>

    </div>
    </div>
  )
}

export default Contact