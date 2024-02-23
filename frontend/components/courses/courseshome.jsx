// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "../../styles/coursehome.css";

// function CHome() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get("http://localhost:8081/api/courses/", {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setCourses(response.data);
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//     }
//   };
  
//   const setID = (id, name, description, duration, photo) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("courseName", name);
//     localStorage.setItem("courseDescription", description);
//     localStorage.setItem("courseDuration", duration);
//     localStorage.setItem("photo", photo);
//   };

//   const deleted = async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:8081/api/courses/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchCourses();
//       navigate("/CHome");
//     } catch (error) {
//       console.error("Error deleting course:", error);
//     }
//   };
  

//   const filteredCourses = courses.filter((item) =>
//     item.courseName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="oi">
//       <div className="design">
//         <div className="sun-container">
//           <input
//             type="text"
//             placeholder="Search by Course Name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="sun-search-bar"
//           />

//           <Link to="/CCreate">
//             <button className="sun-create-btn">Create Course</button>
//           </Link>

//           <div className="sun-records">
//             {filteredCourses.map((item) => (
//               <div key={item.courseId} className="sun-record">
//                 <div className="sun-record-content">
//                   {item.photo && (
//                     <div>
// <img
//                         src={item.photo}
//                         alt="Course"
//                         className="sun-image"
//                         style={{ maxWidth: '200px', maxHeight: '150px' }}
//                       />                     
//                     </div>
//                   )}
//                   <div>
//                     <strong>Course Name:</strong> {item.courseName}
//                   </div>
//                   <div>
//                     <strong>Description:</strong> {item.courseDescription}
//                   </div>
//                   <div>
//                     <strong>Duration:</strong> {item.courseDuration}
//                   </div>
//                   <div>
//                     <Link to="/CEdit">
//                       <button
//                         onClick={() => setID(item.courseId, item.courseName, item.courseDescription, item.courseDuration, item.photo)}
//                         className="sun-update-btn"
//                       >
//                         Update
//                       </button>
//                     </Link>
//                     <button
//                       onClick={() => deleted(item.courseId)}
//                       className="sun-delete-btn"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CHome;
