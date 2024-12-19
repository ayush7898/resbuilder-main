import axios from "./axiosCofig"
//doubt--
const getUser = async () => {
    try {
        const response = await axios.get(`/user`)
        // console.log('getUser',response.data);
        
        return response.data
    } catch (error) {
        return error
    }
}
const updateUser = async (data) => {
    try {
        const response = await axios.put(`/user`, data)
        return response.data
    } catch (error) {
        return error
    }
}
const addPersonalDetail = async (data) => {
    try {
        const response = await axios.post(`/user/addDetails`, data)
        console.log('addPersonalDetail', response);
        console.log('addPersonalDetail', response.data);
        
        return response.data
    } catch (error) {
        return error
    }
}

export {
    getUser,
    updateUser,
    addPersonalDetail
}