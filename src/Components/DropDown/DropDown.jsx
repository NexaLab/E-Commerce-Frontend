import React, { memo, useEffect, useState } from 'react'
import {Layout, Dropdown, Button} from "antd"
import { DownOutlined  } from '@ant-design/icons';
import "./DropDown.css"
import ProductService from '../../services/ProductService';
import { useProducts } from '../../hooks/context/ProductContext';

function DropDown() {


  const { value } = useProducts();

    const [products, setProducts] = value;

  const[ brandsOfPerfume , setBrandsOfPerfume] = useState([]);
  
  
  const items = brandsOfPerfume.map((brand,index) => {

    return {

      key: brand.brandName,
      label: <Button type="text">{brand.brandName}</Button>
    }

  })





  const getAllBrandsOfPerfumes = () => {

    ProductService.getAllBrandsOfPerfume()
    .then(res => {

      setBrandsOfPerfume(res.data.data);

    })
    .catch(error => {

      console.log(error);
    })


  }


  useEffect(() => {


    getAllBrandsOfPerfumes();

  },[])


  


   


    const getPerfumesOfBrand = (brand) => {

      ProductService.getPerfumesOfBrand(brand)
      .then(res => {


        setProducts(res.data.data)
      })
      .catch(error => {

        console.log(error);
      })

    }



    const selectBrand = ({key}) => {
     
      getPerfumesOfBrand(key);
    }
    
    


  return (
    <Layout className='dropdown-main'>
      
      <Dropdown


          menu={{ items, onClick: selectBrand }}
          
          
          >
        <div>
        <a onClick={(e) => e.preventDefault()}>
        
        <DownOutlined style={{fontSize: "20px"}}/>
        </a>
        </div>
      </Dropdown>
    </Layout>
  )
}

export default memo(DropDown);