import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/registrationlist.css"; // Import your custom CSS file

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8081/api/registrations/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRegistrations(response.data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <>
    <div className="ke">
    <div className="registration-container">
      <h2 className="registration-heading">Registration List</h2>
      <table className="registration-table">
        <thead>
          <tr>
            <th className="registration-th">Name</th>
            <th className="registration-th">Email</th>
            <th className="registration-th">Phone Number</th>
            <th className="registration-th">Course</th>
            <th className="registration-th">Date Of Birth</th>
            <th className="registration-th">Preferred Class Time</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration.id} className="registration-tr">
              <td className="registration-td">{registration.name}</td>
              <td className="registration-td">{registration.email}</td>
              <td className="registration-td">{registration.phoneNumber}</td>
              <td className="registration-td">{registration.course}</td>
              <td className="registration-td">{registration.dateOfBirth}</td>
              <td className="registration-td">{registration.preferredClassTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

export default RegistrationList;
