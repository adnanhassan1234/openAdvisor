import API from 'APIs/base'
import { ENDPOINT } from 'config/constants'

const updateProfile = async (data) => {
    return await API.postMethod(ENDPOINT.profile.updateProfile, true, data)
}

export default {
    updateProfile
}