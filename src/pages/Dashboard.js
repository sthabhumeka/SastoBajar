import React from 'react';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    message.info('Logged out');
    navigate('/');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome to Sasto Bajar Dashboard</h2>
      <p>Here you can manage products, view orders, and more.</p>
      <Button type="primary" danger onClick={handleLogout}>
        Sign Out
      </Button>
    </div>
  );
};

export default Dashboard;
