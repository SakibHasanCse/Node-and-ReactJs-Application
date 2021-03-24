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