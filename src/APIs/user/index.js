import API from 'APIs/base'
import { ENDPOINT } from 'config/constants'

const getLawyers = async () => {
    return await API.getMethod(ENDPOINT.user.getLawyers, false)
}

const getFounders = async () => {
    return await API.getMethod(ENDPOINT.user.getFounders, false)
}

export default {
    getLawyers,
    getFounders
}