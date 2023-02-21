import API from 'APIs/base'
import { ENDPOINT } from 'config/constants'

const getBlogs = async () => {
    return await API.getMethod(ENDPOINT.blogs.getMany, false)
}

export default {
    getBlogs
}