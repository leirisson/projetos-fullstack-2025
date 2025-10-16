import axios from 'axios'
import 'dotenv'


export const http = axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
})