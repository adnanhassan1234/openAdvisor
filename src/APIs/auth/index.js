import API from 'APIs/base'
import { ENDPOINT } from 'config/constants'

const signUp = async (data) => {
    return await API.postMethod(ENDPOINT.auth.signUp, false, data)
}

const login = async (email, password) => {
    return await API.postMethod(ENDPOINT.auth.login, false, {
        email,
        password,
    })
}

const forgetPassword = async (email) => {
    return await API.postMethod(ENDPOINT.forgetpassword, false, {
        email,
    })
}

export default {
    signUp,
    login,
    forgetPassword
}