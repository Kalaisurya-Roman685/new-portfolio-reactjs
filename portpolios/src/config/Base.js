import axios from 'axios';

const Config = axios.create({
    baseURL: 'http://api.fakeshop-api.com',
});


export default Config;