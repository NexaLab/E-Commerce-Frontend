import axios from "axios";
import {getAllPerfumeApiUrl, getAllCosmeticsApiUrl, getAllProductsApiUrl, getAllBrandsOfPerfumeApiUrl, getPerfumesOfBrandApiUrl, getAllBrandsOfCosmeticsApiUrl, getCosmeticsOfBrandApiUrl } from '../apis/ApiUrls'



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


    getAllBrandsOfPerfume() {

        return axios.get(getAllBrandsOfPerfumeApiUrl());
    }


    getPerfumesOfBrand(brand) {

        return axios.get(getPerfumesOfBrandApiUrl(brand));
    }



    getAllBrandsOfCosmetics() {

        return axios.get(getAllBrandsOfCosmeticsApiUrl());
    }



    getCosmeticsOfBrand(brand) {

        return axios.get(getCosmeticsOfBrandApiUrl(brand));
    }




}





export default ProductService = new ProductService();