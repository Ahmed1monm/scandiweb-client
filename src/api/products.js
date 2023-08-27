import axios from "axios"

import { BASE_URL } from "../helpers/contants"

export const getProducts = async () => {
    let products = await axios.get(BASE_URL)
    return products
}

export const deleteProducts = async (ids) => {
    return await axios.delete(BASE_URL,{
        data:{
            products:ids
        }
    })
}

export const addProduct = async ({sku, name, price, weight= null, size= null, dimensions= null}) => {
    return await axios.post(BASE_URL, {sku,name,price,weight,size,dimensions})
}