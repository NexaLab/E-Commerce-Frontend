import { createContext, useContext, useState } from "react";





const ProductContext = createContext(null);




export const ProductContextProvider = ({children}) => {

    const [ products, setProducts] = useState([]);

    return <ProductContext.Provider value={ { value: [ products , setProducts ] } }>{children}</ProductContext.Provider>
}




export const useProducts = () => useContext(ProductContext);