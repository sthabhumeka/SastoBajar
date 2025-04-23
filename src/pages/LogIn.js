import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form, message } from 'antd';

const LogIn= () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = ({ username, password }) => {
    setLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('auth', true);
        message.success('Login successful');
        navigate('/dashboard');
      } else {
        message.error('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: 300, margin: '100px auto' }}>
      <h2>Login to Sasto Bajar</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input placeholder="admin" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password placeholder="admin" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          LogIn
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
