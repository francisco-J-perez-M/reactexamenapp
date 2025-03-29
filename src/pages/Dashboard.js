import React from 'react';
import UserList from '../components/UserList';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Bienvenido al Dashboard</h1>
      <UserList />
    </div>
  );
};

export default Dashboard;
