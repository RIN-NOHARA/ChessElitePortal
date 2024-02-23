import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false); // State for managing the pop-up visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/login', loginData);
      console.log(response.data.email);
      localStorage.setItem('token', response.data.token); // Store token in local storage
      handleLogin();
      if (email === 'admin@gmail.com') {
        navigate('/about-us');
      } else {
        navigate('/nav');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Invalid username/password. Please try again.');// Display the pop-up for invalid credentials
    }
  };

  return (
    <div>
      <>
        <br /> <br /> <br /> <br />
        <div className="bodylogin"></div>
        <div className="login-container">
          <br /> <br /> <br /> <br />
          <h2>Login</h2>
          <br />
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
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

            <br />
            <button type="submit">Login</button>
            <br />
          </form>
          {showError && (
            <div className="error-popup">
              <p>Invalid username or password. Please try again.</p>
              <button onClick={() => setShowError(false)}>Close</button>
            </div>
          )}
          <center>
            <pre>
              <p>
                Don't have an account? <Link to="/login">Register here</Link>
              </p>
            </pre>
          </center>
        </div>
      </>
    </div>
  );
};

export default Login;
