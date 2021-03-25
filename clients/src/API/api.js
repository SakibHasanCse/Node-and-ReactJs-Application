import axios from 'axios'
var { REACT_APP_API_URL } = process.env



export const getAllStudent = () => {
    return axios({
            method: 'GET',
            url: `${REACT_APP_API_URL}/students`
        })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            return error.response.data
        })
}
export const createStudent = (form) => {
    return axios({
            method: 'POST',
            url: `${REACT_APP_API_URL}/student`,
            data: form
        })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            return error.response.data
        })
}

export const getSubject = (id) => {
    return axios({
            method: 'GET',
            url: `${REACT_APP_API_URL}/subject/${id}`
        })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            return error.response.data
        })
}
export const CreateSubject = (form) => {
    return axios({
            method: 'POST',
            url: `${REACT_APP_API_URL}/subject`,
            data: form
        })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            return error.response.data
        })
}

export const getallSubjects = () => {
    return axios({
            method: 'GET',
            url: `${REACT_APP_API_URL}/subjects`
        })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            return error.response.data
        })
}