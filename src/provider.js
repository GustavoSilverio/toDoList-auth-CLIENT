import axios from "axios";

export const Http = axios.create({
    baseURL: process.env.API_URL,
})