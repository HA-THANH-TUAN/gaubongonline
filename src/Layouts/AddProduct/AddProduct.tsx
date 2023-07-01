

import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import {GrAdd} from "react-icons/gr"
import ModalAddCatalog from './ModalAddCatalog/ModalAddCatalog';
import ModalAddSubCatalog from './ModalAddSubCatalog/ModalAddSubCatalog';
import ModalAddColection from './ModalAddColection/ModalAddColection';
import ModalAddPromotion from './ModalAddPromotion/ModalAddPromotion';
import UploadImage from './UploadImage/UploadImage';
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};

const AddProduct: React.FC = ()=>{
    const [addCatalog, setAddCatalog]=useState<boolean>(false)
    const [addSubCatalog, setAddSubCatalog]=useState<boolean>(false)
    const [addColection, setAddColection]=useState<boolean>(false)
    const [addPromotion, setAddPromotion]=useState<boolean>(false)

  return(
   <Space direction='vertical' className='mx-10'>
       <h2 className='text-center font-bold text-2xl py-8'>
            THÊM SẢN PHẨM
       </h2>
        <Form
            layout="vertical"
            name="nest-messages"
            onFinish={onFinish}
            style={{backgroundColor:"", width:"100%"}}
            validateMessages={validateMessages}
        >
            <Row gutter={30}>
                <Col span={8}>
                    <Form.Item name={['product', 'name']} label={<span className='text-lg font-medium'>Tên sản phẩm</span>} >
                    <Input className='w-full' />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name={['product', 'product_code']} label={<span className='text-lg font-medium'>Mã sản phẩm</span>} >
                    <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name={['product', 'trade_mark']} label={<span className='text-lg font-medium'>Thương hiệu</span>} >
                    <Input value={"NEM"}/>
                    </Form.Item>
                </Col>
                <Col span={12}> 
                    <Form.Item name={['product', 'material']} label={<span className='text-lg font-medium'>Chất liệu</span>} >
                    <Input />
                    </Form.Item>
                </Col>
                <Col span={12}> 
                    <Form.Item name={['product', 'style']} label={<span className='text-lg font-medium'>Phong cách</span>} >
                    <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name={['product', 'model_infor']} label={<span className='text-lg font-medium'>Thông tin người mẫu</span>} >
                    <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name={['product', 'clothes_mixing']} label={<span className='text-lg font-medium'>Trang phục kết hợp</span>} >
                    <Input />
                    </Form.Item>
                </Col>

                <Col span={6}>
                    <Form.Item name={['product', 'catalog_id']} label={<span className='text-lg font-medium'>Danh mục</span>} >
                    <div className='flex'>
                        <Select placeholder="I'm Select" allowClear>
                            <Select.Option value="1">Áo sơ mi</Select.Option>
                            <Select.Option value="2">Quần</Select.Option>
                            <Select.Option value="3">Áo dài</Select.Option>
                        </Select>
                        <Button onClick={()=>setAddCatalog(state=>(!state))}><GrAdd/></Button>
                    </div>
                    </Form.Item>

                </Col>

                <Col span={6}>
                    <Form.Item name={['product', 'subCatalory_id']} label={<span className='text-lg font-medium'>Danh mục phụ</span>} >
                    <div className='flex'>
                        <Select placeholder="I'm Select" allowClear>
                            <Select.Option value="1">Áo sơ mi</Select.Option>
                            <Select.Option value="2">Quần</Select.Option>
                            <Select.Option value="3">Áo dài</Select.Option>
                        </Select>
                        <Button onClick={()=>setAddSubCatalog(state=>(!state))}><GrAdd/></Button>
                    </div>
                    </Form.Item>

                </Col>
                <Col span='6'>
                    <Form.Item name={['product', 'colection_id']} label={<span className='text-lg font-medium'>Bộ sưu tập</span>} >
                    <div className='flex'>
                        <Select placeholder="I'm Select" allowClear>
                            <Select.Option value="1">Áo sơ mi</Select.Option>
                            <Select.Option value="2">Quần</Select.Option>
                            <Select.Option value="3">Áo dài</Select.Option>
                        </Select>
                        <Button onClick={()=>setAddColection(state=>(!state))}><GrAdd/></Button>
                    </div>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name={['product', 'promotion_id']} label={<span className='text-lg flex font-medium'>Chương trình khuyến mãi</span>} >
                    <div className='flex'>
                        <Select placeholder="I'm Select" allowClear>
                            <Select.Option value="1">Áo sơ mi</Select.Option>
                            <Select.Option value="2">Quần</Select.Option>``
                            <Select.Option value="3">Áo dài</Select.Option>
                        </Select>
                        <Button  onClick={()=>setAddPromotion(state=>(!state))}><GrAdd/></Button>
                    </div>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name={['product', 'price']} label={<span className='text-lg font-medium'>Giá sản phẩm</span>} >
                    <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item name={['product', 'valueDiscount']} label={<span className='text-lg font-medium'>Giảm giá</span>} >
                    <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name={['product', 'description']} label={<span className='text-lg font-medium'>Mô tả sản phẩm</span>}>
                    <Input.TextArea />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item name={['product', 'product_images']} label={<span className='text-lg font-medium'>Hình ảnh sản phẩm</span>}>
                        <UploadImage/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item className='flex justify-center'>
                <Button type="primary" htmlType="submit" className='bg-blue-600'>
                    Tạo sản phẩm
                </Button>
            </Form.Item>

        </Form>
        {addCatalog&&<ModalAddCatalog handleOpen={setAddCatalog} isOpen={addCatalog}/>}
        {addSubCatalog&&<ModalAddSubCatalog handleOpen={setAddSubCatalog} isOpen={addSubCatalog}/>}
        {addColection&&<ModalAddColection handleOpen={setAddColection} isOpen={addColection}/>}
        {addPromotion&&<ModalAddPromotion handleOpen={setAddPromotion} isOpen={addPromotion}/>}
   </Space>
)}
export default AddProduct;