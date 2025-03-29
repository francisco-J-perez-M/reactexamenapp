import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(username, password, email);
      if (data.success) {
        setSuccess('Usuario registrado exitosamente');
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        setError(data.error || 'Error al registrar usuario');
      }
    } catch (error) {
      setError(String(error));
    }
  };

  return (
    <div className="container">
      <h2>Registrar Usuario</h2>
      {success && <p className="success">{success}</p>}
      {error && <p className="error">{String(error)}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
