import axios from "axios";

export const Http = axios.create({
    baseURL: " https://localhost:7032/api/ControlerTeste/",
})