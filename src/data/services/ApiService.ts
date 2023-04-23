import axios from 'axios';

export const ApiService = axios.create(
    {
        baseURL: "http://localhost:4000/cart-history",
        headers: { 'Content-Type':'application/json'}
    }
)