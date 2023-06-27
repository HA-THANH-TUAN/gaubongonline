import React, { useState } from 'react'
import Image  from 'next/image';
import ThumnailList from './ThumnailList';
const products=[
  {
    id:"jciwciv",
    name:"áo sơ mi",
    trade_mark: "NEM",
    product_code: "wehvweuivnwev6",
    description:"",
    material:"vải",
    style: "trẻ trung",
    model_infor:'vvvebe',
    other_infor:"evere",
    price:"50000",
    discount:"7%",
    quanlities:[
      {
        color: "red",
        quanlities:6,
        size:"xl"
      },
      {
        color: "green",
        quanlities:6,
        size:""
      },

    ]


  }
]

const data=[
  {
      url:"https://product.hstatic.net/200000182297/product/2_8148a10821e848f69b0e9cf55f9ad20b_master.jpg",
      id:0
  },
  {
      url:"https://product.hstatic.net/200000182297/product/d032221412312000405p1399dt_3b0c43ceaf144b3eb24d08768d864dbe_master.jpg",
      id:1
  },
  {
      url:"https://product.hstatic.net/200000182297/product/d032221412312000405p1399dt_3__45bbc79a40354a96b1e6cd5e17be4698_master.jpg",
      id:2
  },
  {
      url:"https://product.hstatic.net/200000182297/product/d032221412312000405p1399dt_1__cc5f92f923c549229055db69eb6d4639_master.jpg",
      id:3
  },
  {
      url:"https://product.hstatic.net/200000182297/product/d032221412312000405p1399dt_2__a375ef09223e4d22b15458f5bc3fe8c5_master.jpg",
      id:4
  },
]

interface IImages {
  url:string, id:number

}
interface IProductCart {
  images:IImages
}

export const ProductCart:React.FC = () => {

  const [showImage, setShowImage]=useState<IImages>({url:"", id: 0})
  return (
    <div className='rounded-t-lg shadow-lg'>
        <div className='relative overflow-hidden'><Image className=' rounded object-contain hover:scale-110 hover:cursor-pointer transition-transform ' width={500} height={500} src={ showImage.url? showImage.url:data[0].url} alt='image'/></div>
        <h2 className='text-center text-[#00000070] font-bold my-2'>ĐẦM CHẤM BI D03222</h2>
        <p className='font-bold text-center text-[#ff5575] my-2'>559,000 đ</p>
        {
          <ThumnailList 
          handleSetShowImangeUrl={setShowImage}
          data={data}
          idImage={showImage.id}
        />
        }

    </div>
  )
}
