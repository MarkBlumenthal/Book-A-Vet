// frontend/src/components/AdminLogin.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/login', credentials);
      localStorage.setItem('token', res.data.token);
      navigate('/calendar');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
      <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;

