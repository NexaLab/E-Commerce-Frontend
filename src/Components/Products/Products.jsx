import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService';
import { Layout, Card, Button, Select , Pagination } from 'antd'
import './Products.css'
import CustomModal from '../Modal/CustomModal';





const { Header, Content } = Layout;
const { Meta } = Card;
const { Option } = Select;






function Products() {


   

    const [products, setProducts] = useState([]);
    const [perfumes, setPerfumes] = useState([])
    const [cosmetics, setCosmetics] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productData, setProductData] = useState(null)

    const[ selectedSize ,  setSelectedSize] = useState(0);
    const [ priceIndex , setSelectedPriceIndex ] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(4);
const start = (currentPage - 1) * pageSize;
const end = start + pageSize;
const currentProducts = products && products.slice(start, end);
const totalItems = products && products.length


    const getAllProducts = () => {

        ProductService.getAllProducts()
            .then(res => {
                setProducts(res.data.data.products)
            })
            .catch(error => {

                console.log(error);
            })
    }







    function allPerfumes() {
        ProductService.getAllPerfumes()
            .then(res => {
                setPerfumes(res.data.data.perfumes)

            })
            .catch(error => {

                console.log(error);
            })
    }





    function allCosmetics() {
        ProductService.getAllCosmetics()
            .then(res => {
                setCosmetics(res.data.data.cosmetics)
            })
            .catch(error => {

                console.log(error);
            })
    }





    useEffect(() => {



        allPerfumes()
        allCosmetics()
        getAllProducts();



    }, [])


 


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

    

    const onSelectSize = (selectedSize,index,product) => {

        
        console.log(selectedSize)
        console.log(index);
        const newProduct = products.filter(stateOfProduct => stateOfProduct === product)[0];
        const prices = newProduct.prices.split(',');
        let tempPrice = prices[0];
        prices[0] = prices[index.key];
        prices[index.key] = tempPrice;
        const newPrice = prices.join(',');



        const sizes = newProduct.sizes.split(',');
        const tempSize = sizes[0];
        sizes[0] = sizes[index.key]
        sizes[index.key] = tempSize;

        const newSize = sizes.join(',')




        const newProductState = products.map(stateOfProduct => stateOfProduct === product ? { ...stateOfProduct,prices: newPrice,sizes:newSize } : stateOfProduct);

        setProducts(newProductState)

        console.log(newProductState)
     


    }



  




    return (
        <Layout >
            <Header className='products-header'>
                <h1>All Products</h1>
            </Header>
            <Content className='product-content'>
                {


                    currentProducts.map((product, index) => {



                        const sizes = product.sizes && product.sizes.split(",");
                        const prices = product.prices && product.prices.split(",");
                
                       
                        return (
                            <Card
                                key={index}
                                style={{
                                    width: 300,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    marginBottom: 20,
                                    marginTop: 20,
                                    boxShadow: "3px 3px 5px 1.5px lightgray",

                                }}
                                cover={<img alt={product.name} src={product.image} />}
                            >
                                <Meta title={`Product: ${product.name}`} description={<div><span style={{ color: 'darkslategray', fontWeight: 'bold' }}>Brand: </span> <span>{product.brand}</span> </div>} />
                                <h3>{ product.prices && prices[priceIndex]}</h3>
                                <Button onClick={() => {
                                    showModal(product)
                                }} className='product-button'>View Product</Button>
                                {

                                    product.sizes && 
                                    
                                    
                                    <Select className='select' key={`${currentPage}-${pageSize}`}  defaultValue={sizes[0]} style={{ width: 120 }}

                                        onChange={(value, index) => onSelectSize(value, index,product)}
                                    
                                    >
                                        

                                        {

                                            
                                            sizes.map((size, index) => {
                                              
                                                return (

                                                    <Option

                                                        key={index}
                                                        value=
                                                        {
                                                            size
                                                        }>{size}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                }

                            </Card>
                        )
                    })

                }{isModalOpen && <CustomModal product={productData}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />}
           
            </Content>

            <Pagination
        style={{ marginTop: 20, textAlign: 'center' }}
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={(page, pageSize) => {
          setCurrentPage(page);
          setPageSize(pageSize);
         
        }}
      />
        </Layout>

    )
}

export default Products
