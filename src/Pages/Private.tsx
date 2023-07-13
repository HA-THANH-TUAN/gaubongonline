import { Layout } from 'antd'
import React,{useState} from 'react'
import {Navigate,Outlet} from "react-router-dom"
import SiderBar from '../Layouts/SiderBar/SiderBar'
import Header from '../Layouts/Header/Header'

interface IPrivate{
    // children:React.ReactNode
}

const layoutStyle: React.CSSProperties = {
    height:"100vh",
};
const Private:React.FC<IPrivate> = (props) => {

  const [collapsed, setCollapsed]=useState<boolean>(false)
  const [isOpenDrawer, setIsOpenDrawer]=useState<boolean>(false)

  const isLogin =localStorage.getItem("isLogin")==="true"
  return (
    <>  
        { 
            true ? 
            <Layout style={layoutStyle}>
                <SiderBar collapsed={collapsed} isOpenDrawer={isOpenDrawer}  handleSetDrawer={setIsOpenDrawer}/>
                <Layout>
                  <Header handleSetCollapsed ={setCollapsed} handleSetDrawer={setIsOpenDrawer} collapsed/>
                  <main className='overflow-y-auto'>
                    <Outlet/>
                  </main>
                </Layout>
            </Layout>  :
            <Navigate to="/login"/>
        }
    </>
  )
}

export default Private