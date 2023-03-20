export const getAllProductsApiUrl = () => {

    return `http://localhost:3001/api/products`;

}

export const getAllPerfumeApiUrl = () => {

    return `http://localhost:3001/api/perfumes`;
}

export const getAllCosmeticsApiUrl = () => {

    return `http://localhost:3001/api/cosmetics`;
}


export const getAllBrandsOfPerfumeApiUrl = () => {

    return `http://localhost:3001/api/perfumes/brands`
}


export const getPerfumesOfBrandApiUrl = (brand) => {

    return `http://localhost:3001/api/perfumes/of-brand/${brand}`;
}



export const getAllBrandsOfCosmeticsApiUrl = () => {

    return `http://localhost:3001/api/cosmetics/brands`
}



export const getCosmeticsOfBrandApiUrl = (brand) => {

    return `http://localhost:3001/api/cosmetics/of-brand/${brand}`;
}
