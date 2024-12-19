import axios from "./axiosCofig"


const addEducationDetail = async (data) => {
    try {
        const response = await axios.post(`/user/educationDetail`,data)
        console.log('addEducationDetail', response);
        console.log('addEducationDetail', response.data);
        
        return response.data
    } catch (error) {
        return error

    }
}

const updateEducationDetail = async (data,id) => {
    try {
        const response = await axios.put(`/user/educationDetail/${id}`,data)
        console.log('updateEducationDetail',response)
        
        return response.data
    } catch (error) {
        return error

    }
}

export  {
    addEducationDetail,
    updateEducationDetail
}