import React, { useState } from "react";
import axios from "axios";
import SuccessModal from "./SuccessModel";
import "../../styles/registration.css";

const SuperRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",  
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    preferredClassTime: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post("http://localhost:8081/api/registrations/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
   console.log(response.data);
      if (response.status === 200) {
        // If the response is successful, show the modal
        setShowModal(true);
      } else {
        // Handle other response statuses as needed
        console.error("Registration failed. Response:", response);
      }
    } catch (error) {
      // Handle the error
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="super-picture">
      <div className="super-registration-container">
        <h2 className="ch">Chess Academy Enrollment</h2>
        <form onSubmit={handleSubmit}>
          <div className="super-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter the name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="super-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter the email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="super-form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter the phone number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="super-form-group">
            <label htmlFor="course">Academy available</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="Chess Basics">Chess Basics</option>
              <option value="Advanced Chess Strategies">Advanced Chess Strategies</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="super-form-group">
            <label htmlFor="dateOfBirth">Date Of Birth</label>
            <input
              type="date"
              placeholder="Date of birth"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="super-form-group">
            <label htmlFor="preferredClassTime">Preferred Class Time</label>
            <input
              type="time"
              placeholder="Enter the preferred class time"
              id="preferredClassTime"
              name="preferredClassTime"
              value={formData.preferredClassTime}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="super-btn-enroll">
            Enroll
          </button>
        </form>
      </div>
      {showModal && (
        <SuccessModal courseName={formData.course} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default SuperRegistrationForm;
