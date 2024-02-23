import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Home_Stud.css";

function StuHome() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStudents() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8081/students/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const formattedStudents = response.data.map((student) => ({
          ...student,
          studentDOB: new Date(student.studentDOB).toLocaleDateString(),
        }));
        setStudents(formattedStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }

    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    console.log("Deleting student with ID:", id);
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8081/students/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(students.filter((student) => student.studentId !== id));
    } catch (error) {
      console.error("Error deleting student:", error.response);
    }
  };

  return (
    <div className="wels">
      <div className="earth-container">
        <div className="enrollment-details">
          <h2>Student Enrollment Details</h2>
        </div>
        <div className="add-button-container">
          <Link to="/SAdd">
            <button className="add-student-btn">Add Student</button>
          </Link>
        </div>
        <table className="earth-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentName}</td>
                <td>{new Date(student.studentDOB).toLocaleDateString()}</td>
                <td>{student.studentAddress}</td>
                <td>{student.studentMobile}</td>
                <td>{student.studentAge}</td>
                <td>
                  <Link to={`/SEdit/${student.studentId}`}>
                    <button className="earth-update-btn">Update</button>
                  </Link>
                  <button
                    onClick={() => deleteStudent(student.studentId)}
                    className="earth-delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StuHome;
