import React from 'react';
import { Modal, Spin } from 'antd';


interface IPModalSpin {
    open: boolean,


}

const ModalSpin: React.FC<IPModalSpin> = ({open}) =>{ 

    return (
        <Modal
           centered
           open={open}
           footer={null}
           width={"auto"}
           closable={false}
        >
        <Spin />
    
      </Modal>
      )
} 

export default ModalSpin;