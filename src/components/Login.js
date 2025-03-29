// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://18.188.139.51:5000/login', {
        email,
        password,
      });

      // Si el login es exitoso, guarda el usuario en el estado
      setUser(response.data.user);
      setError('');
      // Redirigir al usuario o manejar el login exitoso
      // ejemplo: window.location.href = '/dashboard';
    } catch (err) {
      setError('Credenciales incorrectas o error en el servidor');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
