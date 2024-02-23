import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/add.css"; // Import your custom CSS file

function IEdit() {
    const [institudeName, setInstitudeName] = useState("");
    const [institudeDescription, setInstitudeDescription] = useState("");
    const [institudeAddress, setInstitudeAddress] = useState("");
    const [institudeEmail, setInstitudeEmail] = useState("");
    const [institudeMobile, setInstitudeMobile] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (institudeName === "" || institudeEmail === "") {
            alert("Invalid input");
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(
                `http://localhost:8081/api/academies/${id}`,
                {
                    academyName: institudeName,
                    description: institudeDescription,
                    address: institudeAddress,
                    email: institudeEmail,
                    mobile: institudeMobile,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(response.data); // Log the response for debugging

            navigate("/IHome");
        } catch (error) {
            console.error("Error updating institute:", error);
        }
    };

    useEffect(() => {
        const storedId = localStorage.getItem("id");
        const storedInstitudeName = localStorage.getItem("institudename");
        const storedInstitudeDescription = localStorage.getItem("institudedescription");
        const storedInstitudeAddress = localStorage.getItem("institudeaddress");
        const storedInstitudeEmail = localStorage.getItem("institudeemail");
        const storedInstitudeMobile = localStorage.getItem("institudemobile");

        setId(storedId);
        setInstitudeName(storedInstitudeName);
        setInstitudeDescription(storedInstitudeDescription);
        setInstitudeAddress(storedInstitudeAddress);
        setInstitudeEmail(storedInstitudeEmail);
        setInstitudeMobile(storedInstitudeMobile);
    }, []);

    return (
        <div className="moonpic">
            <form
                className="moon-form"
                onSubmit={handleSubmit}
            >
                <div className="moon-form-group mb-3" controlId="formBasicInstitudeName">
                    <input
                        value={institudeName}
                        onChange={(e) => setInstitudeName(e.target.value)}
                        type="text"
                        placeholder="Enter Institute Name"
                    />
                </div>

                <div className="moon-form-group mb-3" controlId="formBasicInstitudeDescription">
                    <input
                        value={institudeDescription}
                        onChange={(e) => setInstitudeDescription(e.target.value)}
                        type="text"
                        placeholder="Enter Institute Description"
                    />
                </div>

                <div className="moon-form-group mb-3" controlId="formBasicInstitudeAddress">
                    <input
                        value={institudeAddress}
                        onChange={(e) => setInstitudeAddress(e.target.value)}
                        type="text"
                        placeholder="Enter Institute Address"
                    />
                </div>

                <div className="moon-form-group mb-3" controlId="formBasicInstitudeEmail">
                    <input
                        value={institudeEmail}
                        onChange={(e) => setInstitudeEmail(e.target.value)}
                        type="email"
                        placeholder="Enter Institute Email"
                    />
                </div>

                <div className="moon-form-group mb-3" controlId="formBasicInstitudeMobile">
                    <input
                        value={institudeMobile}
                        onChange={(e) => setInstitudeMobile(e.target.value)}
                        type="tel"
                        placeholder="Enter Institute Mobile"
                    />
                </div>

                <button
                    className="moon-button primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </button>

                <Link className="moon-form-link" to="/IHome">
                    <button className="moon-button warning" size="lg">
                        Home
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default IEdit;
