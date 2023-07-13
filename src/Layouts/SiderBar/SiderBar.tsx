import React from 'react'
import { AiOutlineHome,AiOutlineAppstoreAdd } from 'react-icons/ai';
import {FaProductHunt, FaShoppingCart } from 'react-icons/fa';
import type { MenuProps } from 'antd';
import { Drawer, Layout, Menu, Space } from 'antd';
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
        icon:<span data-route="u"><AiOutlineHome/></span>,
        label: `Dashboard`,
    },
    {
        key: `/shop`,
        icon:<span data-route="u"><AiOutlineAppstoreAdd/></span>,
        label: `Shop`,
    },
    {
        key: `/product`,
        icon:<span data-route="u"><FaProductHunt/></span>,
        label: `Product`,
        children:[
            {
                key:"/product/product-list",
                icon:<span data-route="u"><FaProductHunt/></span>,
                label: `Product list`,
            },
            {
                key:"/product/add-product",
                icon:<span data-route="u"><FaProductHunt/></span>,
                label: `Add product`,
            },
            {
                key:"/product/product-catalogories",
                icon:<span data-route="u"><FaProductHunt/></span>,
                label: `Catalogories`,
            },
        ]
    },
    {
        key: `/orders`,
        icon:<span data-route="u"><FaShoppingCart/></span>,
        label: `Orders`,
    },
    {
        key: `/transaction`,
        icon:<span ><BsBarChartLineFill/></span>,

        label: `Transaction`,
    },

    {
        key: `/users`,
        icon:<span data-route="u"><BiSolidUserAccount/></span>,
        label: `Users`,
        children:[
            {
                key: `/users/customer`,
                icon:<span data-route="u"><BiSolidUserAccount/></span>,
                label: `Customer`,
            },
            {
                key: `/users/black-user`,
                icon:<span data-route="u"><BiSolidUserAccount/></span>,
                label: `Black user`,
            },
            {
                key: `/users/reporting`,
                icon:<span data-route="u"><BiSolidUserAccount/></span>,
                label: `Reporting`,
            },
        ]
    },
    {
        key: `/statistics`,
        icon:<span data-route="u"><BsPieChartFill/></span>,
        label: `Statistics`,
    },
    {
        key: `/account`,
        icon:<span data-route="u"><MdManageAccounts/></span>,
        label: `Account`,
    },
   
]

interface IPSiderBar {
    collapsed:boolean,
    isOpenDrawer:boolean,
    // handleSetDrawer:React.Dispatch<React.SetStateAction<boolean>>,
    handleSetDrawer:any

}

const SiderBar:React.FC<IPSiderBar> = ({collapsed,isOpenDrawer,handleSetDrawer}) => {
    const [openMenu, setOpenMenu]=React.useState<string[]>([])

    const navigate=useNavigate()
    const location=useLocation()
    const mainPathName= location.pathname

    React.useEffect(() => {
        setOpenMenu([`/${mainPathName.split("/")[1]}`])
    }, [mainPathName])

  return (
    <div style={siderStyle}>
        <nav className='hidden md:block'>

            <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu
                    className='side-bar'

                    openKeys={openMenu}
                    // defaultOpenKeys={[`/${mainPathName.split("/")[1]}`]}
                    onOpenChange={(e)=>{setOpenMenu(e)}}
                    onClick={(infor)=>{navigate(infor.keyPath[0])}}
                    mode="inline"
                    selectedKeys={[`${mainPathName}`]}
                    style={{ height: '100%'}}
                    theme='dark'
                    items={data}
                />
            </Layout.Sider>
        </nav>

        <nav  className='block md:hidden'>
                <Drawer
                bodyStyle={{padding:"0"}}
                title={<span className='text-center inline-block w-full text-3xl'>Menu</span>}
                placement={'left'}
                closable={true}
                onClose={(prams:any)=>{
                    handleSetDrawer()
                }}
                open={isOpenDrawer}
                key={"d"}
                >
                <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu
                    className='side-bar'


                    openKeys={openMenu}
                    // defaultOpenKeys={[`/${mainPathName.split("/")[1]}`]}
                    onOpenChange={(e)=>{setOpenMenu(e)}}
                    onClick={(infor)=>{navigate(infor.keyPath[0])}}
                    mode="inline"
                    selectedKeys={[`${mainPathName}`]}
                    style={{ height: '100%'}}
                    theme='dark'
                    items={data}
                />
            </Layout.Sider>
          
                </Drawer>
        </nav>
    </div>
  )
}

export default SiderBar