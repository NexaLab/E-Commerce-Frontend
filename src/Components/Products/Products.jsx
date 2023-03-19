import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService';
import { Layout, Card , Button} from 'antd'
import './Products.css'
import CustomModal from '../Modal/CustomModal';
import DropDown from '../DropDown/DropDown';

const { Header, Content} = Layout;
const { Meta } = Card;


function Products() {

    const [products, setProducts] = useState(null);
    const [perfumes, setPerfumes] = useState([])
    const [cosmetics, setCosmetics] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productData, setProductData] = useState(null)


    const getAllProducts = () => {

        ProductService.getAllProducts()
            .then(res => {
              setProducts(res.data.data)
            })
            .catch(error => {

                console.log(error);
            })
    }



function allPerfumes() {
    ProductService.getAllPerfumes()
        .then( res => {
            setPerfumes(res.data.data.perfumes)
            
        })
        .catch( error => {

            console.log( error );
        })
      }

function allCosmetics (){
        ProductService.getAllCosmetics()
        .then( res => {
            setCosmetics(res.data.data.cosmetics)
        })
        .catch( error => {

            console.log( error );
        })
      }

  useEffect( () => {
      allPerfumes()
      allCosmetics()
      getAllProducts();
    },[])


    const showModal = (product) => {
      setProductData(product)
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
   

  return (
    <Layout >
      <Header className='products-header'>
        <div>
          <h1>All Products</h1>
        </div>
        <div>
          <DropDown/> 
        </div> 
      </Header>
    <Content className='product-content'>
     {products && products.products.map((product,index) => {

      return (
        <Card
        key={index}
        style={{
          width: 300,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          marginTop: 20 ,
          boxShadow: "3px 3px 5px 1.5px lightgray",
       
        }}
        cover={<img alt={product.name} src={product.image_url} />}
      >
        <Meta title={`Product: ${product.name}`} description = {<div><span style={{color: 'darkslategray', fontWeight: 'bold'}}>Brand: </span> <span>{product.brand }</span> </div>} />
        <Button onClick={()=> {
          showModal(product)
        }} className='product-button'>View Product</Button>
      </Card>
      )
     }) 
     
    }{isModalOpen && <CustomModal product={productData} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} /> }
      </Content>
      </Layout>
  
  )
}

export default Products
