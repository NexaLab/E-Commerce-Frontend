import axios from "axios";
import { getAllProductsApiUrl } from "../apis/ApiUrls";




class ProductService {



    getAllProducts() {

        return axios.get(getAllProductsApiUrl());
    }


}




export default ProductService = new ProductService();