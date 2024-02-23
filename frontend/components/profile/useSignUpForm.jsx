// useSignUpForm.jsx
import React, { useState } from "react";

const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({ id: 1 }); // Assigning id as 8 by default

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      callback(inputs);
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(prevInputs => ({
      ...prevInputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    setInputs // Make sure to include setInputs in the returned object
  };
};

export default useSignUpForm;
