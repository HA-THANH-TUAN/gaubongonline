import { FC, ReactNode } from "react"
export interface INotify{
    icon: ReactNode,
    colorIcon?:string,
    content: ReactNode|string,
    handleClick?:()=>void
    contentButton?:string
}
const Notify:FC<INotify>=(props)=>{
    return <section className="w-full h-screen justify-center flex items-center fixed top-0 right-0 bg-[#000000c4]">

        <div className=" basis-full">
            <div className="flex flex-col rounded justify-center items-center sm:mx-auto mx-2 py-10 max-w-[400px] bg-white ">
                <span style={props.colorIcon?{color:props.colorIcon}:undefined} className="text-6xl">{props.icon}</span>
                <span className="mt-8 text-lg font-medium ">{props.content}</span>
                <button onClick={props.handleClick} className="text min-w-[60px] bg-orange-600 active:bg-orange-500 sm:hover:bg-orange-500 rounded-sm px-3 py-2 mt-8 text-white font-medium text-md" >{props.contentButton}</button>
            </div>
        </div>


    </section>

}
export default Notify