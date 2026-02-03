import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    Authorization: import.meta.env.API_KEY,
  },
});

export default api;
