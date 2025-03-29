import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenido a la App de Gestión de Usuarios</h1>
      <Link to="/login">Iniciar Sesión</Link> | <Link to="/register">Registrar</Link>
    </div>
  );
};

export default Home;
