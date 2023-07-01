import { Button, Modal, Space, Upload, UploadFile } from 'antd';
import { RcFile, UploadChangeParam } from 'antd/es/upload';
import "./UploadImage.css"
import React, {useState} from 'react'
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => { console.log("error:::",error);reject(error) };
  });

export default function UploadImage() {
    const [previewImage, setPreviewImage]=useState<string>("")
    const [previewOpen, setPreviewOpen]=useState<boolean>(false)
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj as RcFile);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
      };
    const handleCancel=()=>{
        setPreviewOpen((state=>(!state)))
    }
    const handleOnChange=(infor:UploadChangeParam<UploadFile<any>>)=>{
  
      setFileList(infor.fileList)
      console.log("infor::::",infor.fileList[0])

    }
    const handleOnRemove=(file: UploadFile<any>)=>{
      const restImage=fileList.filter((item)=>item.uid!==file.uid)
      setFileList(restImage)
      console.log("Xóa:::",restImage)
    }

    const [fileList, setFileList] = useState<UploadFile[]>([]);
    console.log("fileListfileList:::",fileList)

    return (
        <Space className='UploadImage'>
          <Upload
            onPreview={handlePreview}
            fileList={fileList}
            listType="picture"
            multiple
            maxCount={4}
            onRemove={handleOnRemove}
            onChange={handleOnChange}
            className='upload-list-inline'
          >
            <Button >Upload</Button>
          </Upload>
          <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </Space>
      );
}
