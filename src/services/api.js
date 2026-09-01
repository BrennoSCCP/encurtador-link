

import axios from 'axios'

export const key = 'de954df71fb8c4ab4f75ae3fdffe82622a667ffc'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;