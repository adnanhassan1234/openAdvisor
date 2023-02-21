export const API_URL = "https://api.openadvisor.appscorridor.com/api/v1";
// export const API_URL = "http://localhost:3000/api/v1";
export const KEY =
    "YW1Gb1lXNTZZV2xpTG1GemJHRnRMbTFsYUdGeVFHZHRZV2xzTG1OdmJUb3lZV2RoYVc0PQ==";


export const ENDPOINT = {

    auth: {
        login: `${API_URL}/auth/login`,
        signUp: `${API_URL}/auth/sign-up`,
    },

    profile: {
        updateProfile: `${API_URL}/user/update`
    },
    user_me: `${API_URL}/auth/me`,

    file: {
        upload: `${API_URL}/files/upload`,
        uploadMultiple: {
            preUrl: `${API_URL}/files/`,
            postUrl: `upload-attachments`
        },
    },

    blogs: {
        getMany: `${API_URL}/blog`
    },

    availability: {
        getDays: `${API_URL}/availability/days`,
        getTimeSlots: `${API_URL}/availability/time-slots`,
    },
    support: {
        create: `${API_URL}/support/send-request`
    },

    user: {
        getLawyers: `${API_URL}/user/professionals/lawyer`,
        getFounders: `${API_URL}/user/professionals/founder`
    },

    contact_requests: {
        recieved: `${API_URL}/contact-requests/received`
    }

};