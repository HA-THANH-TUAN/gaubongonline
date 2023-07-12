import React from 'react'
import { AiOutlineHome,AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FaHouseUser, FaProductHunt, FaShoppingCart } from 'react-icons/fa';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import {useNavigate, useLocation} from "react-router-dom"
import { BsBarChartLineFill, BsPieChartFill } from 'react-icons/bs';
import { BiSolidUserAccount } from 'react-icons/bi';
import { MdManageAccounts } from 'react-icons/md';

const siderStyle: React.CSSProperties = {
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };

const data:MenuProps["items"] = [
    {

        key: `/`,
        icon:<span><AiOutlineHome/></span>,
        label: `Dashboard`,
    },
    {
        key: `/shop`,
        icon:<span><AiOutlineAppstoreAdd/></span>,
        label: `Shop`,
    },
    {
        key: `/product`,
        icon:<span><FaProductHunt/></span>,
        label: `Product`,
        children:[
            {
                key:"/product/product-list",
                icon:<span><FaProductHunt/></span>,
                label: `Product list`,
            },
            {
                key:"/product/add-product",
                icon:<span><FaProductHunt/></span>,
                label: `Add product`,
            },
            {
                key:"/product/product-catalogories",
                icon:<span><FaProductHunt/></span>,
                label: `Catalogories`,
            },
        ]
    },
    {
        key: `/orders`,
        icon:<span><FaShoppingCart/></span>,
        label: `Orders`,
    },
    {
        key: `/transaction`,
        icon:<span ><BsBarChartLineFill/></span>,

        label: `Transaction`,
    },

    {
        key: `/users`,
        icon:<span><BiSolidUserAccount/></span>,
        label: `Users`,
        children:[
            {
                key: `/users/customer`,
                icon:<span><BiSolidUserAccount/></span>,
                label: `Customer`,
            },
            {
                key: `/users/black-user`,
                icon:<span><BiSolidUserAccount/></span>,
                label: `Black user`,
            },
            {
                key: `/users/reporting`,
                icon:<span><BiSolidUserAccount/></span>,
                label: `Reporting`,
            },
        ]
    },
    {
        key: `/statistics`,
        icon:<span><BsPieChartFill/></span>,
        label: `Statistics`,
    },
    {
        key: `/account`,
        icon:<span><MdManageAccounts/></span>,
        label: `Account`,
    },
   
]

interface IPSiderBar {
    collapsed:boolean
}

const SiderBar:React.FC<IPSiderBar> = ({collapsed}) => {
    const [openMenu, setOpenMenu]=React.useState<string[]>([""])
    const navigate=useNavigate()
    const location=useLocation()
    const mainPathName= location.pathname
    React.useEffect(() => {

    }, [])
    
  return (
    <Layout.Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
        <Menu
            className='side-bar'
            openKeys={openMenu}
            defaultOpenKeys={[]}
            onOpenChange={(e)=>{setOpenMenu(e)}}
            onClick={(infor)=>{navigate(infor.keyPath[0])}}
            mode="inline"
            selectedKeys={[`${mainPathName}`]}
            style={{ height: '100%'}}
            theme='dark'
            items={data}
        />
    </Layout.Sider>
  )
}

export default SiderBar