import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // فرض کنیم اینجا از API برای ورود استفاده می‌کنیم.
    if (username === 'admin' && password === 'password') {
      const userData = { username: 'admin' }; // داده‌ای که از سرور می‌آید
      login(userData);
      navigate('/dashboard'); // هدایت به صفحه داشبورد
    } else {
      setError('نام کاربری یا رمز عبور اشتباه است.');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16">
      <h2 className="text-2xl text-center mb-4">صفحه ورود</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">نام کاربری</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium">رمز عبور</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          ورود
        </button>
      </form>
    </div>
  );
};

export default Login;
