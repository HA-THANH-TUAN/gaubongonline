import React from 'react'
import Image  from 'next/image';

export const ProductCart = () => {
  return (
    <div className='rounded-t-lg shadow-lg'>
        <div className=''><Image className=' rounded-t-lg object-contain' width={500} height={500} src={"https://gaubongonline.vn/wp-content/uploads/2023/02/ao-len-may-cuoi-4-500x500.jpg"} alt='image'/></div>
        <h2 className='text-center font-bold my-2'>Gấu  Bông Teddy Áo Len Mây Cười </h2>
        <p className='font-bold text-center text-[#ff5575] my-2'>785.000 đ</p>
        <ul className='flex justify-center items-center flex-wrap'>
            <li className='border border-solid text-sm md:text-base my-1 mx-[3px] px-[6px] bg-[#ff5575] text-white rounded'>1m1</li>
            <li className='border border-solid text-sm md:text-base my-1 mx-[3px] px-[6px] bg-[#ff5575] text-white rounded'>1m1</li>
            <li className='border border-solid text-sm md:text-base my-1 mx-[3px] px-[6px] bg-[#ff5575] text-white rounded'>1m1</li>
            <li className='border border-solid text-sm md:text-base my-1 mx-[3px] px-[6px] bg-[#ff5575] text-white rounded'>1m1</li>
            <li className='border border-solid text-sm md:text-base my-1 mx-[3px] px-[6px] bg-[#ff5575] text-white rounded'>1m1</li>
            <li className='border border-solid text-sm md:text-base my-1 mx-[3px] px-[6px] bg-[#ff5575] text-white rounded'>1m1</li>
        </ul>

    </div>
  )
}
