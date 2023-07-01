import { Button, Modal } from 'antd';
import { useState } from 'react';

interface IPModalAddPromotion {
    isOpen:boolean,
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ModalAddPromotion:React.FC<IPModalAddPromotion> = ({isOpen,handleOpen}) => {

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
        title="TẠO CHƯƠNG TRÌNH KHUYẾN MÃI"
        open={isOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        
      </Modal>
  );
};
export default ModalAddPromotion;