// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://18.188.139.51:5000/register', {
        username,
        email,
        password,
      });

      // Si el registro es exitoso, muestra un mensaje de éxito y limpia los campos
      setSuccess('Usuario registrado con éxito!');
      setError('');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('Error al registrar el usuario. Intenta de nuevo.');
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
