import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sinistrozs-desenvolvimento.techmail.com.br/api',
})

export default api;