import { Button, Modal } from 'antd';
import { useState } from 'react';

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
  return (
      <Modal
        style={{textAlign:"center"}}
        title="THÊM DANH MỤC"
        open={isOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        
      </Modal>
  );
};
export default ModalAddCatalog;