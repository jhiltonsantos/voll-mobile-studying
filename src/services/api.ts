import axios from "axios"

const api = axios.create({
    baseURL: "http://192.168.150.35:3000"
})

export default api;