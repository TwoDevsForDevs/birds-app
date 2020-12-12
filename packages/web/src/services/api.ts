import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACTA_APP_API_URL
});

export default api;
