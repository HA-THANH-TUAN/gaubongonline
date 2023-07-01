import React,{useState} from 'react'
import {Checkbox, Form, Input, Layout,Button, message} from "antd"
import {PiLockKeyBold} from "react-icons/pi"
import {LiaUserCircleSolid} from "react-icons/lia"
import AuthenApi, { IFormLoginAdmin } from '../Apis/authenApi'
import ModalSpin from '../Components/ModalSpin/ModalSpin'
import { setCookie } from '../Utils/setCookie'
import {useNavigate} from 'react-router-dom'
import { AxiosError } from 'axios'

const configMessage={
    maxCount: 1,
    prefixCls: 'my-message',
  }
const Login = () => {
    const [loading, setLoading]=useState<boolean>(false)
    const [messageApi, contextHolder] = message.useMessage(configMessage);
    const [error, setError]=useState<boolean>(false)

    // const success=()=>{
    //     messageApi.open({
    //        type:"success",
    //        content:"Đăng nhập thành công "
    //     })
    // }
    const errorLogin=(text="Lỗi server ")=>{
        messageApi.open({
           type:"error",
           content:text
        })
    }
    const nav=useNavigate()
    const onFinish = (values:IFormLoginAdmin) => {
        
        const fetchLogin=async(formData:IFormLoginAdmin)=>{
            try {
                setError(false)
                setLoading(true)
                const dataRes=await AuthenApi.loginAdmin(formData)
                if(dataRes.status===200){
                    // success()
                    localStorage.setItem("isLogin", "true")
                    const data=dataRes.data.metadata
                    Object.keys(data).forEach((value, index)=>{
                        setCookie(`__${value}`, JSON.stringify(data[value]),2)

                    })
                }
                nav("/")
                // if(code)
                
            } catch (error) {
                const err = error as AxiosError
                console.log(err.response?.status)
                if (err.response?.status===401) {errorLogin("Đăng nhập thất bại");console.log("data")}
                else {
                    errorLogin()
                }
                setError(true)
            }
            finally{
                setLoading(false)
            }
        }
        fetchLogin(values)
      };
  return (
        <>
            {contextHolder}
            <Layout className='h-screen flex justify-center' style={{backgroundImage:"url('https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg')", backgroundSize:"100% 100%"}} >
                <ModalSpin open={loading}/>
                <div className='w-full max-w-lg mx-auto'>
                <Form
                    name="login"
                    className="login-form bg-white p-6 rounded-md"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item>
                        <h1 className='text-5xl text-center font-semibold mb-10'>Login</h1>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<LiaUserCircleSolid className="site-form-item-icon text-xl h-9" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<PiLockKeyBold className="site-form-item-icon text-xl h-9" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>    
                    <Form.Item className='flex items-center flex-col'>
                        <Button type="primary" htmlType="submit" className="bg-blue-400 h-10 w-full">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            </Layout>
        </>
  )
}

export default Login