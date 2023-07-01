
import { Button, Modal } from 'antd';
import { useState } from 'react';

interface IPModalAddSubCatalog {
    isOpen:boolean,
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ModalAddSubCatalog:React.FC<IPModalAddSubCatalog> = ({isOpen,handleOpen}) => {

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
  return (
      <Modal
        style={{textAlign:"center"}}
        title="THÊM DANH MỤC PHỤ"
        open={isOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        
      </Modal>
  );
};
export default ModalAddSubCatalog;