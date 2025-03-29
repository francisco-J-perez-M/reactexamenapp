import axios from 'axios';

const API_URL = 'http://18.188.139.51:5000';

// Iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Error al iniciar sesión';
  }
};

// Registrar nuevo usuario
export const registerUser = async (username, password, email) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Error al registrar usuario';
  }
};

// Obtener lista de usuarios
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data.users || [];
  } catch (error) {
    throw 'Error al obtener usuarios';
  }
};
