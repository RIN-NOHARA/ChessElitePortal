// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "../../styles/courseshome.css";

// function CourseDeleteHome() {
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
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setCourses(response.data);
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//     }
//   };

//   const setID = (id, name, description, duration) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("coursename", name);
//     localStorage.setItem("coursedescription", description);
//     localStorage.setItem("courseduration", duration);
//   };

//   const deleted = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5173/api/courses/${id}`);
//       fetchCourses();
//     } catch (error) {
//       console.error("Error deleting course:", error);
//     }
//   };

//   const filteredCourses = courses.filter((item) =>
//     item.coursename.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="like">
//       <center><h1 className="he1">The Most Popular Courses</h1></center>
//       <div className="star-container">
//         <input
//           type="text"
//           placeholder="Search by Course Name"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="star-search-bar"
//         />

//         <Link className="star-create-link" to="/CCreate">
//           <button className="star-create-btn" size="lg">
//             Create
//           </button>
//         </Link>

//         <div className="star-records">
//           {filteredCourses.map((item) => (
//             <div key={item.courseId} className="star-record">
//               <div className="star-record-content">
//                 <div><strong>Course Name:</strong> {item.coursename}</div>
//                 <div><strong>Description:</strong> {item.coursedescription}</div>
//                 <div><strong>Duration:</strong> {item.courseduration}</div>
//                 <div>
//                   <Link to="/CEdit">
//                     <button
//                       onClick={() => setID(item.courseId, item.coursename, item.coursedescription, item.courseduration)}
//                       className="star-update-btn"
//                     >
//                       Update
//                     </button>
//                   </Link>
//                   <button onClick={() => deleted(item.courseId)} className="star-delete-btn">
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseDeleteHome;
