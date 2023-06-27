import React from "react";
import {GiCheckMark} from "react-icons/gi"
  interface IThumnailUrl{
    handleSetShowImangeUrl:any,
    data:{url:string,id:number}[],
    idImage:number
  }
const ThumnailList:React.FC<IThumnailUrl>=({handleSetShowImangeUrl,data,idImage})=> {

  return (
    <div className="py-4">
      <ul className="flex overflow-x-auto hidden-scroll w-full mx-auto pb-2">
         {
            data.map((item)=> <li key={item.id} onClick={()=>{handleSetShowImangeUrl({url: item.url, id:item.id})}}><span className="relative inline-block mx-1 w-8 h-8 hover:cursor-pointer hover:opacity-70 rounded-[50%]" style={{backgroundImage:`url("${item.url}")`, backgroundSize:"cover"}}>{item.id===idImage &&<span className="asolute top-0 w-8 h-8 rounded-[50%] bg-[#00000070] flex justify-center items-center"></span>}</span></li>)
         }
      </ul>
    </div>
  )
}

export default ThumnailList
