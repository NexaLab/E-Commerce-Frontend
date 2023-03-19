import React from 'react'
import { Modal } from 'antd'
import './Modal.css'

function CustomModal({product, open , onOk , onCancel}) {
  
  return (
    <>
    <Modal title={`Name: ${product.name}`} open={open} onOk={onOk} onCancel={onCancel} >
     <h3>Price: {product.prices.split(',')[0]}</h3>
     <h3>Brand: {product.brand}</h3>
    <p className='modal-para'><h3> Details: </h3> {product.description}</p>
 
  </Modal>
  </>
  )
}


export default CustomModal;
