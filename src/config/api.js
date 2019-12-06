import axios from 'axios';

const api = axios.create({
  baseURL: 'https://unifeobpiback.herokuapp.com/',
});

export default api;