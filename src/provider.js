import axios from "axios";

export const Http = axios.create({
    baseURL: "https://teste54.azurewebsites.net/api/ControlerTeste",
})