import React, { useState } from 'react';
import './auth.css';

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState({
    username:"",
    password:""
  })
// console.log(login);

  const handleLogin = () => {
    
  };

  const handleDetails=(e:any)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="auth-form">
        <input
          type="text"
          placeholder="Username"
          name='username'
          value={login.username}
          onChange={(e) => handleDetails(e) }
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          value={login.password}
          onChange={(e) => handleDetails(e)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
