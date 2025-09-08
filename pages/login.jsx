import React from 'react';
import { login } from '../lib/auth';

const Login = () => {
  const handleLogin = async () => {
    await login('email@example.com', 'password');
  };
  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
