import React from 'react'
import { Modal } from 'antd'


function CustomModal({perfume, open , onOk , onCancel}) {
  
  return (
    <>
    <Modal title={perfume.name} open={open} onOk={onOk} onCancel={onCancel} >
    
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
  </>
  )
}


export default CustomModal;
