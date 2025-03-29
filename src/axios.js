// src/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.188.139.51:5000',  // URL de tu API
});

export default api;
