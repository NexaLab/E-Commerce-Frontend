import axios from "axios";
import {getAllPerfumeApiUrl, getAllCosmeticsApiUrl, getAllProductsApiUrl } from '../apis/ApiUrls'



class ProductService {

    getAllProducts() {

        return axios.get(getAllProductsApiUrl());
    }

    getAllPerfumes() {

        return axios.get(getAllPerfumeApiUrl());
    }

    getAllCosmetics() {

        return axios.get(getAllCosmeticsApiUrl());
    }


}





export default ProductService = new ProductService();