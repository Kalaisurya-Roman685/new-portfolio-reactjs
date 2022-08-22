import axios from "axios";


export function ProductApi()
{
    return axios.get(`https://dummyjson.com/products`);
}