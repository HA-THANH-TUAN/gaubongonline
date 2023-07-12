import { Button, Input, Modal , Form, InputNumber, Upload} from 'antd';
import { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';
import ProductApi from '../../../Apis/productApi';

interface IPMadalAddCatolog {
    isOpen:boolean,
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ModalAddCatalog:React.FC<IPMadalAddCatolog> = ({isOpen,handleOpen}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      handleOpen((state)=>(!state))
    }, 2000);
};
const handleCancel = () => {
      handleOpen((state)=>(!state))
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish=(values:any)=>{
    console.log(values)
    const fecthData=async()=>{
     const data= await ProductApi.addCatalog(values)
     console.log("data:::",data)
    }
    fecthData()
  }
  return (
      <Modal
        style={{textAlign:"center"}}
        title="THÊM DANH MỤC"
        open={isOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          onFinish={onFinish}
          layout="vertical"
      
        >
       
          <Form.Item label="Tên danh mục" name='catalog_name'>
            <Input  placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Thứ tự danh mục" name="catalog_order">
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="thumbnail"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" maxCount={1}  listType="picture">
              <Button icon={<FaFileUpload />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit'>Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
  );
};
export default ModalAddCatalog;