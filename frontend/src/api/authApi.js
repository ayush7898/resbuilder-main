import axios from "./axiosCofig"

const Login = async (data, navigate) => {
    try {
        const response = await axios.post(`/auth/login`, data)
        console.log(response)
        localStorage.setItem('token', response.data.token)
        // localStorage.removeItem('token')
        // localStorage.getItem('token')
        // navigate('/profile')
        window.location.reload();
        return response.data
    } catch (error) {
        return error
    }
}
const Register = async (data, navigate) => {
    try {
        const response = await axios.post(`/auth/register`, data)
        navigate('/profile')
        return response.data
    } catch (error) {
        return error
    }
}


export {
    Login,
    Register,
}