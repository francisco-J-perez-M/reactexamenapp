// App.js
import React, { useState, useEffect } from 'react';
import UserList from './components/UserList'; // Asegúrate de tener este archivo
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Obtiene los usuarios desde la API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://18.188.139.51:5000/users');
      const data = await response.json();
      if (data.success) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!newUser.username || !newUser.password || !newUser.email) {
      alert('Todos los campos son requeridos');
      return;
    }

    try {
      const response = await fetch('http://18.188.139.51:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();

      if (data.success) {
        alert('Usuario registrado exitosamente');
        setNewUser({
          username: '',
          email: '',
          password: '',
        });
        fetchUsers();
      } else {
        alert(data.error || 'Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Hubo un error al registrar el usuario');
    }
  };

  useEffect(() => {
    if (user) {
      fetchUsers();
    }
  }, [user]);

  return (
    <div className="App">
      {!user ? (
        <div>
          <Login setUser={setUser} />
          <Register setUser={setUser} />
        </div>
      ) : (
        <div>
          <h2>Bienvenido, {user.username}!</h2>
          <button className="logout" onClick={handleLogout}>Cerrar sesión</button>

          <div className="UserList">
            <UserList users={users} />
          </div>

          <h3>Crear nuevo usuario</h3>
          <form onSubmit={handleRegisterSubmit}>
            <div>
              <label>Nombre de usuario:</label>
              <input
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Correo electrónico:</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Registrar usuario</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
