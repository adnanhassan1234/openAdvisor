import axios from "axios";
import { store } from 'redux/store'

//Get Method
const getMethod = async (endpoint, authentication = true, data, printConsole = false) => {
    header = {};
    if (authentication) {
        const { auth } = store.getState();
        var bearer_token = auth.accessToken || localStorage.getItem('accessToken');
              
        var header = {
            headers: {
                "Authorization": `Bearer ${bearer_token}`
            }
        }
    }
    return await axios.get(endpoint, header)
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.error(error)
            throw error.response
        })
}

// Post Method
const postMethod = async (endpoint, authentication = true, data = null, printConsole = false, multipart = false) => {
    let headers = {};

    if (authentication) {
        const { auth } = store.getState();
        var bearer_token = auth.accessToken || localStorage.getItem('accessToken');
        headers["Authorization"] = `Bearer ${JSON.parse(bearer_token)}`
    }
    if (multipart) {
        headers['content-type'] = 'multipart/form-data'
    }
    console.log(data)
    return await axios.post(endpoint, data, { headers })
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((error) => {
            console.error(error)
            throw error.response
        })
}

// Delete Method
const deleteMethod = async (endpoint, authentication = true, data = null, printConsole = false) => {
    header = {};
    if (authentication) {
        const { auth } = store.getState();
        var bearer_token = auth.accessToken || localStorage.getItem('accessToken');
        var header = {
            headers: {
                "Authorization": `Bearer ${JSON.parse(bearer_token)}`
            }
        }
    }
    console.log(header);
    return await axios.delete(endpoint, header)
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.error(error)
            throw error.response
        })
}

//Patch Method
const patchMethod = async (endpoint, authentication = true, data = null, printConsole = false) => {
    header = {};
    if (authentication) {
        const { auth } = store.getState();
        var bearer_token = auth.accessToken || localStorage.getItem('accessToken');
        var header = {
            headers: {
                "Authorization": `Bearer ${JSON.parse(bearer_token)}`
            }
        }
    }
    return await axios.patch(endpoint, data, header)
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.error(error)
            throw error.response
        })
}


export default {
    getMethod,
    postMethod,
    deleteMethod,
    patchMethod
};