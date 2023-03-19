import React from 'react'
import {Layout, Dropdown, Button} from "antd"
import { DownOutlined  } from '@ant-design/icons';
import "./DropDown.css"
function DropDown() {
    const items = [
        {
          key: '1',
          label: (
            <Button type="text">All Products</Button>
          ),
        },
        {
          key: '2',
          label: (
            <Button type="text">Perfumes</Button>
          ),
        },
        {
          key: '3',
          label: (
            <Button type="text">Cosmetics</Button>
          ),
        },
    ]
  return (
    <Layout className='dropdown-main'>
      <Dropdown
          menu={{items}}
          >
        <a onClick={(e) => e.preventDefault()}>
        
        <DownOutlined style={{fontSize: "20px"}}/>
        </a>
      </Dropdown>
    </Layout>
  )
}

export default DropDown;