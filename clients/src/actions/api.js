import axios from 'axios'
import { API } from '../config/config'



export const getAllStudent = () => {
    return axios({
            method: 'GET',
            url: `${API}/students`
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
            url: `${API}/student`,
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
            url: `${API}/subject/${id}`
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
            url: `${API}/subject`,
            data: form
        })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            return error.response.data
        })
}