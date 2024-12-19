import axios from "axios"
const token = localStorage.getItem('token')
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        Authorization: `Bearer ${token}`
    }
})
console.log(token)
export default axiosInstance