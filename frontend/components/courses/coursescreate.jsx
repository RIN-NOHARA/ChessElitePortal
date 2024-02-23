// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../../styles/add.css";

// function CCreate() {
//   const [courseName, setCourseName] = useState("");
//   const [courseDescription, setCourseDescription] = useState("");
//   const [courseDuration, setCourseDuration] = useState("");
//   const [photoUrl, setPhotoUrl] = useState(""); // Use empty string for URL
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     console.log(token);
//     if (courseName === "" || courseDescription === "" || courseDuration === "" || photoUrl === "") {
//       alert("Invalid input");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8081/api/courses/", {
//         courseEntity: {
//           courseName: courseName,
//           courseDescription: courseDescription,
//           courseDuration: courseDuration,
//         },
//         file: photoUrl,
//       }, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("Response:", response.data);
//       navigate("/CHome");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="moonpic">
//       <form className="moon-form">
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
//             value={photoUrl}
//             onChange={(e) => setPhotoUrl(e.target.value)}
//             type="url"
//             placeholder="Enter Image URL"
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="moon-button primary"
//           type="submit"
//         >
//           Submit
//         </button>

//         <Link className="moon-form-link" to="/CHome">
//           <button className="moon-button info" size="lg">
//             Home
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default CCreate;
