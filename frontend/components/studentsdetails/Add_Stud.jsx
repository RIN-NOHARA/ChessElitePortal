import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Add_Stud.css";

function StuCreate() {
  const [studentName, setStudentName] = useState("");
  const [studentDOB, setStudentDOB] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentMobile, setStudentMobile] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      studentName === "" ||
      studentDOB === "" ||
      studentAddress === "" ||
      studentMobile === "" ||
      studentAge === ""
    ) {
      alert("Invalid input");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      console.log("Token:", token); // Log token for verification

      const response = await axios.post(
        "http://localhost:8081/students/",
        {
          studentName,
          studentDOB,
          studentAddress,
          studentMobile,
          studentAge,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response Data:", response.data); // Log response data for debugging
      navigate("/SHome");
    } catch (error) {
      console.error("Error creating student:", error.response);

      if (error.response.status === 403) {
        // Unauthorized access
        alert("Unauthorized access. Please check your credentials.");
      } else {
        // Other error handling logic
        alert("Error creating student. Please try again.");
      }
    }
  };

  return (
    <div className="stude">
      <form className="crud-form">
        <div className="crud-form-group mb-3">
          <label htmlFor="studentName">Student Name:</label>
          <input
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            type="text"
            placeholder="Enter Student Name"
          />
        </div>

        <div className="crud-form-group mb-3">
          <label htmlFor="studentDOB">Date of Birth:</label>
          <input
            id="studentDOB"
            value={studentDOB}
            onChange={(e) => setStudentDOB(e.target.value)}
            type="date"
            placeholder="Enter Student Date of Birth"
          />
        </div>

        <div className="crud-form-group mb-3">
          <label htmlFor="studentAddress">Address:</label>
          <input
            id="studentAddress"
            value={studentAddress}
            onChange={(e) => setStudentAddress(e.target.value)}
            type="text"
            placeholder="Enter Address"
          />
        </div>

        <div className="crud-form-group mb-3">
          <label htmlFor="studentMobile">Mobile:</label>
          <input
            id="studentMobile"
            value={studentMobile}
            onChange={(e) => setStudentMobile(e.target.value)}
            type="tel"
            placeholder="Enter Mobile"
          />
        </div>

        <div className="crud-form-group mb-3">
          <label htmlFor="studentAge">Age:</label>
          <input
            id="studentAge"
            value={studentAge}
            onChange={(e) => setStudentAge(e.target.value)}
            type="number"
            placeholder="Enter Age"
          />
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          className="crud-button primary"
          type="submit"
        >
          Submit
        </button>

        <br /> <br />
        <Link className="crud-form-link" to="/SHome">
          <button className="crud-button info" size="lg">
            Home
          </button>
        </Link>
      </form>
    </div>
  );
}

export default StuCreate;
