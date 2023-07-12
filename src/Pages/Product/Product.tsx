import { Button, Space } from 'antd'
import React from 'react'
import  {Outlet,useNavigate} from "react-router-dom"

const Product = () => {
    const navigate=useNavigate()
  return (
    <>
    <section style={{display:"flex"}}>
        {/* <Button onClick={()=>{navigate("/san-pham/them-san-pham")}}>
            Thêm sản phẩm
        </Button> */}
        <Outlet></Outlet>
    </section>
    </>
  )
}

export default Product