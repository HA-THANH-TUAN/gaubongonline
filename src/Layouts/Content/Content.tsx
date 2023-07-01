import { Layout } from 'antd'
import React from 'react'
import { Routes, Route ,Outlet} from 'react-router-dom';
import Product from '../../Pages/Product';
import Home from '../../Pages/Home';
import Shop from '../../Pages/Shop';



const contentStyle: React.CSSProperties = {

  };
const Content:React.FC<any> = () => {
  return (
        <Layout.Content style={contentStyle}>
          HA THANH TUAN
             
              <Outlet/>
        </Layout.Content>

  )
}

export default Content