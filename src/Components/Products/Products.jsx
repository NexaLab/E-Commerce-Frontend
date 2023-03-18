import React, { useEffect, useState } from 'react'
import { Layout, Card , Button} from 'antd'
import './Products.css'
import ProductService from '../../services/ProductService';
import CustomModal from '../Modal/CustomModal';

const { Header, Content} = Layout;
const { Meta } = Card;


function Products() {

  const [perfumes, setPerfumes] = useState([])
  const [cosmetics, setCosmetics] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [perfumeData, setPerfumeData] = useState({})


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
    },[])


    const showModal = (perfume) => {
      setPerfumeData(perfume)
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
      <h1>All Products</h1>  
      </Header>
    <Content className='product-content'>
     {perfumes.map(perfume => {

      return (
        
        <Card
        key={perfume.id}
        style={{
          width: 300,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          marginTop: 20 ,
          boxShadow: "3px 3px 5px 1.5px lightgray",
       
        }}
        cover={<img alt={perfume.name} src={perfume.image_url} />}
      >
        <Meta title={`Product: ${perfume.name}`} description = {<div><span style={{color: 'darkslategray', fontWeight: 'bold'}}>Brand: </span> <span>{perfume.brand }</span> </div>} />
        <Button onClick={()=> {
          showModal(perfume)
          // console.log(perfume)
        }} className='product-button'>View Product</Button>
      </Card>
      )
     }) 
     
    }{isModalOpen && <CustomModal perfume={perfumeData} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} /> }
      
      </Content>
      </Layout>
  
  )
}

export default Products
