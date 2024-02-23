import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSignUpForm from "./useSignUpForm";
import "../../styles/profile1.css";
import axios from "axios";

function Profileex() {
  const { inputs, setInputs, handleInputChange, handleSubmit } = useSignUpForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8081/api/profiles/${inputs.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profileData = response.data;

        setInputs((prevInputs) => ({
          ...prevInputs,
          ...profileData,
        }));
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    if (inputs.id) {
      fetchProfileData();
    }
  }, [inputs.id, setInputs]);

  const handleProfileSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (inputs.id) {
        const response = await axios.put(`http://localhost:8081/api/profiles/${inputs.id}`, inputs, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Profile updated successfully:", response.data);
        navigate("/services");
      } else {
        console.error("Profile ID is missing.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  return (
    <div className="profile1">
      <div className="container">
        <div className="header">
          <h1>Athlete Registration Form</h1>
        </div>
        <div className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            type="text"
            name="firstName"
            value={inputs.firstName || ""}
            placeholder="First Name"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="lastName"
            value={inputs.lastName || ""}
            placeholder="Last Name"
          />
          
         
          <input
            onChange={handleInputChange}
            type="number"
            name="tournamentsAttended"
            value={inputs.tournamentsAttended}
            placeholder="Tournaments Attended"
          />
          <input
            onChange={handleInputChange}
            type="number"
            name="tournamentsWon"
            value={inputs.tournamentsWon || ""}
            placeholder="Tournaments Won"
          />
          <input
            onChange={handleInputChange}
            type="number"
            name="tournamentsLoss"
            value={inputs.tournamentsLoss }
            placeholder="Tournaments Loss"
          />
        
          <input
            onChange={handleInputChange}
            type="url"
            name="github"
            value={inputs.github || ""}
            placeholder="GitHub URL"
          />
          <input
            onChange={handleInputChange}
            type="url"
            name="photo"
            value={inputs.photo }
            placeholder="Photo URL"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="location"
            value={inputs.location }
            placeholder="📍 Location"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="rating"
            value={inputs.rating }
            placeholder="Rating"
          />
          <button type="submit" onClick={handleProfileSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profileex;
