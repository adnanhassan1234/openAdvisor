import API from 'APIs/base'
import { ENDPOINT } from 'config/constants'

const getRecievedRequests = async () => {
    return await API.getMethod(ENDPOINT.contact_requests.recieved, true);
}

export default {
    getRecievedRequests
}