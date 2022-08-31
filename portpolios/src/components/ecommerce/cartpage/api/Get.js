import axios from "axios";


export function ProductApi() {
    return axios.get(`https://api.escuelajs.co/api/v1/products`);
}