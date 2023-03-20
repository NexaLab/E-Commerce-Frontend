import React, {  useEffect, useState } from 'react'
import ProductService from '../../services/ProductService'
import Products from '../Products/Products';



function Perfumes() {

    const [brandsOfPerfume, setBrandsOfPerfume] = useState([]);

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



  

 




    return (
        <div>

            {
                
                 brandsOfPerfume.map((brand, index) => {
                    
                    return(
                
                    <Products  brand={brand.brandName} type={"perfumes"} key={index}/>
                    )
        
        
                })
            }

        </div>
    )
}

export default Perfumes