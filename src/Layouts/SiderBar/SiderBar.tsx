import React from 'react'
import { AiOutlineHome,AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FaHouseUser, FaProductHunt } from 'react-icons/fa';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import {useNavigate, useLocation} from "react-router-dom"

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };

const data:MenuProps["items"] = [
    {
        key: `/`,
        icon: React.createElement(AiOutlineHome),
        label: `Trang chủ`,
    },
    {
        key: `/shop`,
        icon: React.createElement(AiOutlineAppstoreAdd),
        label: `Ứng dụng`,
    },
    {
        key: `/san-pham`,
        icon: React.createElement(FaProductHunt),
        label: `Sản phẩm`,
    },
    {
        key: `/tai-khoan`,
        icon: React.createElement(FaHouseUser),
        label: `Tài khoản`,
    },
]

interface IPSiderBar {
    collapsed:boolean
}

const SiderBar:React.FC<IPSiderBar> = ({collapsed}) => {
    const navigate=useNavigate()
    const location=useLocation()
    const mainPathName= location.pathname.split("/")[1]
  return (
    <Layout.Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
        <Menu
            onClick={(infor)=>{navigate(infor.key)}}
            mode="inline"
            selectedKeys={[`/${mainPathName}`]}
            style={{ height: '100%'}}
            theme='dark'
            items={data}
        />
    </Layout.Sider>
  )
}

export default SiderBar