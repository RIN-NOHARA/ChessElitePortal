import React, { useState } from 'react';
import '../../styles/register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      name: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/register', registrationData);
      if (response.status === 202) {
        // console.log('Registration successful');
        console.log(registrationData);
      } else {
        console.error('Registration failed:', response.data.message);
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      setError('Network error. Please try again.');
    }
  };

  return (
    <>
      <div className="bodyloginreg"></div>
      <form className="register-form" onSubmit={handleSubmit}>
        <label id="lab" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Register</button>
        <p className="login-link">
          Already registered? <Link to="/signin">Login</Link>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
