import Layout from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService';







function Products() {






    const [products, setProducts] = useState(null);







    const getAllProducts = () => {




        ProductService.getAllProducts()
            .then(res => {


                setProducts(res.data.data)
            })
            .catch(error => {

                console.log(error);
            })


    }







    useEffect(() => {


        getAllProducts();


    }, [])











    return (


        <Layout>


        </Layout>
    )
}

export default Products;