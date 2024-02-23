import React from "react";
const { useEffect, useState } = React;
import "../../styles/profile.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
// Import useSignUpForm from "./useSignUpForm"; // Uncomment if useSignUpForm is in a separate file

const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      // You can perform any additional logic or callback here if needed.
      // callback(inputs);
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

function Profileex() {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="profile">
      <div className="container">
        <div className="header">
          <h1>Athlete Registration Form</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            type="text"
            name="firstName"
            value={inputs.firstName || ""}
            placeholder="First Name"
          />
          {/* ... (other input fields) */}
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="pp">
        <div className="header">
          <h1>Athlete Bio</h1>
        </div>
        {/* ... (rest of your code) */}
      </div>
    </div>
  );
}

export default Profileex;
