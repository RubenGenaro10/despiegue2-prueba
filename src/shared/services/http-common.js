import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log('API_BASE_URL', API_BASE_URL);

const  http = axios.create({
    baseURL: 'https://apifakeeasyfood.onrender.com',
    headers: {
        "Content-type": "application/json"
    }
});

export default http;