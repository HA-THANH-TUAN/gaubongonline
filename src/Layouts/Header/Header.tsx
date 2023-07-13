import React,{useState} from 'react'
import {AiOutlineMenuFold,AiOutlineMenuUnfold} from "react-icons/ai"
import { Layout, Button,theme,Avatar,Badge, Popover, List, Space, message } from 'antd'
import {BsFillBellFill} from "react-icons/bs"
import {TbMenu2} from "react-icons/tb"
import {IoChatbox} from "react-icons/io5"
import {HiShoppingCart} from "react-icons/hi"
import { deleteCookie } from '../../Utils/setCookie'
import { useNavigate } from 'react-router-dom'

interface IPHeader {
  collapsed: boolean
  handleSetCollapsed : React.Dispatch<React.SetStateAction<boolean>>
  handleSetDrawer : React.Dispatch<React.SetStateAction<boolean>>
}

const styleSiderBar={
  display:'flex', 
  padding:0,
  justifyContent:"space-between"
}

const Header:React.FC<IPHeader> = ({handleSetCollapsed, collapsed,handleSetDrawer}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nav=useNavigate()
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Đăng xuất thành công ',
    });
  };
  const notifys=<Popover content="notifys" title="Title">
                  <Badge count={5}>
                    <Avatar shape="square" size="large" />
                  </Badge>
                </Popover>
  const chats=<Popover content="chats" title="Title">
                  <Badge count={5}>
                    <Avatar shape="square" size="large" />
                  </Badge>
                </Popover>
  const orders=<Popover content="orders" title="Title">
                  <Badge count={5}>
                    <Avatar shape="square" size="large" />
                  </Badge>
                </Popover>

  const menuAvatar= <ul>
    <li>Thông tin</li>
    <li>Đổi mật khẩu</li>
    <li onClick={()=>{
      localStorage.setItem("isLogin", "")
      deleteCookie("__value")
      deleteCookie("__refesherToken")
      deleteCookie("__accessToken")
      nav("/login")
      success()
    }}>Đăng xuất</li>
  </ul>

  

  return (
    <Layout.Header style={{backgroundColor:colorBgContainer,...styleSiderBar}}>
      {contextHolder}
      <Space>
        <Space.Compact className='md:block hidden '>
          <Button
            type="text"
            icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            onClick={()=>{handleSetCollapsed((state)=>(!state))}}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}/>

        </Space.Compact>
        <Space.Compact className='md:hidden block'>
          <Button
            type="text"
            icon={<TbMenu2/>}
            onClick={()=>{handleSetDrawer((state)=>(!state))}}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}/>

        </Space.Compact>
      </Space>
      <Space size={40} style={{margin:"0 30px"}}>
        <Popover className='flex items-items hover:cursor-pointer hover:opacity-70' content="notifys" title="Title">
          <Badge count={5}>
          <BsFillBellFill className='text-2xl'/>
          </Badge>
        </Popover>
        <Popover className='flex items-items hover:cursor-pointer hover:opacity-70' content="chats" title="Title">
          <Badge count={5}>
            <IoChatbox className='text-2xl'/>
          </Badge>
        </Popover>
        <Popover className='flex items-items hover:cursor-pointer hover:opacity-70' content="orders" title="Title">
          <Badge count={5}>
            <HiShoppingCart className='text-3xl' />
          </Badge>
        </Popover>
        <Popover className='flex items-items hover:cursor-pointer hover:opacity-70' content={menuAvatar} title="Title">
          <Badge>
            <Avatar size={40} src={"https://thuthuatnhanh.com/wp-content/uploads/2022/06/Anh-Dragon-Ball-cuong-no.jpg"}/>
          </Badge>
        </Popover>
      </Space>
    </Layout.Header>
  )
}

export default Header