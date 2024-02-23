import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/coursehome.css";

function IHomeUser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [institutes, setInstitutes] = useState([]);
  const navigate = useNavigate();

  // Fetch institutes from the backend on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get("http://localhost:8081/api/academies/", {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setInstitutes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching institutes:", error);
      });
  }, []);

  const enrollInstitute = (id) => {
    // Your enrollment logic here
    // For example, you can navigate to an enrollment page or handle the enrollment in some other way.
    navigate(`/reg23`);
  };

  const filteredInstitutes = institutes.filter((institute) =>
    institute.academyName && institute.academyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="oi">
      <div className="design">
        <div className="sun-container">
          {/* <Link to="/add">
            <button className="sun-delete-btn">ADD ACADEMY</button>
          </Link> */}
          <input
            type="text"
            placeholder="Search by Institute Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sun-search-bar"
          />

          <div className="sun-records">
            {filteredInstitutes.map((institute) => (
              <div key={institute.id} className="sun-record">
                <div className="sun-record-content">
                  <div>
                    <strong>Institute Name:</strong> {institute.academyName}
                  </div>
                  <div>
                    <strong>Description:</strong> {institute.description}
                  </div>
                  <div>
                    <strong>Address:</strong> {institute.address}
                  </div>
                  <div>
                    <strong>Email:</strong> {institute.email}
                  </div>
                  <div>
                    <strong>Mobile:</strong> {institute.mobile}
                  </div>
                  <div>
                    <button
                      onClick={() => enrollInstitute(institute.id)}
                      className="sun-enroll-btn" // Add a class for styling
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IHomeUser;
