import Image from "next/image"
import logo from "../assets/images/logo.png"
import {BsSearch} from "react-icons/bs"
import {ImPhone} from "react-icons/im"
const Header:React.FC = () => {
    // useEffect(()=>{
    //     fetch("http://localhost:3005/user/login",{
    //         method:"POST",
    //         headers: {
    //             'content-type': 'application/json;charset=UTF-8',
    //           },
    //         body:JSON.stringify({
    //             name:"HA THANH TUAN"
    //         })
    //     })
    // })
  return (
    <div className='md:block hidden bg-white'>
        <div className='max-w-7xl mx-auto flex justify-between py-2'>

            <div className='flex items-center'>
                <Image width={100} className='w-[80px]' src={logo} alt='logo'/>
                <p className='text-4xl font-semibold font-nunito text-[#02c4c1]'>Gấu Bông Online</p>
            </div>
            <div className='search flex items-center'>
                <form className='flex rounded '>
                    <input 
                        placeholder='Nhập sản phẩm cần tìm ...'
                        className='w-[400px] px-3 border border-r-0 focus:outline-none rounded-l border-solid border-[#ff5575] h-9'/>
                    <span className='text-white flex justify-center items-center bg-[#ff5575] rounded-e-md px-[10px] py-2'><BsSearch/></span>
                </form>
            </div>
            <div className='flex items-center'>
                <span className=' bg-[#ff5575] text-white w-8 h-8 rounded-[50%] flex justify-center items-center'><ImPhone/></span>
                <span className='text-[#ff5575] ml-3 text-2xl font-semibold'>036.331.9792</span>
            </div>
        </div>
    </div>
  )
}

export default Header