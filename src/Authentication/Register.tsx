import React, { useState } from 'react';
import './auth.css';

const RegistrationForm: React.FC = () => {
  const [register, setRegister] = useState({
    firstname:"",
    lastname:"" ,
    email:"",
    password:""
});
 

  const handleRegister = () => {
    // Add your registration logic here
  };
 
  const handleDetails=(e:any)=>{
    setRegister({...register,[e.target.name]:e.target.value})
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="auth-form">
        <input
          type="text"
          placeholder="FirstName"
          name='firstname'
          value={register.firstname}
          onChange={(e) => handleDetails(e)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name='lastname'
          value={register.lastname}
          onChange={(e) => handleDetails(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name='email'
          value={register.email}
          onChange={(e) => handleDetails(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          value={register.password}
          onChange={(e) => handleDetails(e)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
