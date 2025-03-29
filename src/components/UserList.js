import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(String(error));
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>Lista de Usuarios</h2>
      <ul>
        {Array.isArray(users) &&
          users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email} -{' '}
              {new Date(user.created_at).toLocaleDateString()}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
