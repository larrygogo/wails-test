import axios from 'axios'

const request = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:34115',
    timeout: 1000
});

export default request;