import axios from "axios"
import {getAllPerfumeApiUrl, getAllCosmeticsApiUrl } from '../apis/ApiUrls'



class ProductService {



    getAllPerfumes() {

        return axios.get(getAllPerfumeApiUrl());
    }

    getAllCosmetics() {

        return axios.get(getAllCosmeticsApiUrl());
    }


}




export default ProductService = new ProductService();