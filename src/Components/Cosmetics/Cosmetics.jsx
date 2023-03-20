import React, {  useEffect, useState } from 'react'
import ProductService from '../../services/ProductService'
import Products from '../Products/Products';



function Cosmetics() {

    const [brandsOfCosmetics, setBrandsOfCosmetics] = useState([]);



    const getAllBrandsOfCosmetics = () => {

        ProductService.getAllBrandsOfCosmetics()
            .then(res => {

                setBrandsOfCosmetics(res.data.data);
                console.log(res.data)

            })
            .catch(error => {

                console.log(error);
            })


    }



   


    useEffect(() => {

        getAllBrandsOfCosmetics()
    },[])



   

 




    return (
        <div>

            {
                
                 brandsOfCosmetics.map((brand, index) => {
                    
                    return(
                
                    <Products  brand={brand.brandName} type={"cosmetics"}  key={index}/>
                    )
        
        
                })
            }

        </div>
    )
}

export default Cosmetics