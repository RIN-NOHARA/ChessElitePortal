// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../../styles/add.css";

// function CEdit() {
//   const [courseName, setCourseName] = useState("");
//   const [courseDescription, setCourseDescription] = useState("");
//   const [courseDuration, setCourseDuration] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [id, setId] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storedId = localStorage.getItem("id");
//         const token = localStorage.getItem('token');

//         const response = await axios.get(`http://localhost:8081/api/courses/${storedId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         const courseData = response.data;

//         setCourseName(courseData.courseName);
//         setCourseDescription(courseData.courseDescription);
//         setCourseDuration(courseData.courseDuration);
//         setPhoto(courseData.photo);
//         setId(storedId);
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (courseName === "" || courseDescription === "" || courseDuration === "") {
//       alert("Invalid input");
//       return;
//     }

//     const updatedCourse = {
//       courseName: courseName,
//       courseDescription: courseDescription,
//       courseDuration: courseDuration,
//       photo: photo,
//     };

//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(`http://localhost:8081/api/courses/${id}`, updatedCourse, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       navigate("/CHome");
//     } catch (error) {
//       console.error("Error updating course:", error);
//     }
//   };

//   const handlePhotoURLChange = (e) => {
//     setPhoto(e.target.value);
//   };

//   return (
//     <div className="moonpic">
//       <form
//         className="moon-form"
//         onSubmit={handleSubmit}
//       >
//         <div className="moon-form-group mb-3">
//           <input
//             value={courseName}
//             onChange={(e) => setCourseName(e.target.value)}
//             type="text"
//             placeholder="Enter Course Name"
//           />
//         </div>

//         <div className="moon-form-group mb-3">
//           <input
//             value={courseDescription}
//             onChange={(e) => setCourseDescription(e.target.value)}
//             type="text"
//             placeholder="Enter Course Description"
//           />
//         </div>

//         <div className="moon-form-group mb-3">
//           <input
//             value={courseDuration}
//             onChange={(e) => setCourseDuration(e.target.value)}
//             type="text"
//             placeholder="Enter Course Duration"
//           />
//         </div>

//         <div className="moon-form-group mb-3">
//           <input
//             value={photo}
//             onChange={handlePhotoURLChange}
//             type="url"
//             name="photoURL"
//             placeholder="Enter Photo URL"
//           />
//         </div>

//         <button
//           className="moon-button primary"
//           type="submit"
//         >
//           Update
//         </button>

//         <Link className="moon-form-link" to="/CHome">
//           <button className="moon-button warning" size="lg">
//             Home
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default CEdit;
