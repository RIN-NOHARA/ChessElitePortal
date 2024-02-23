import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/site.css'

const FetchUserDetails = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = "http://localhost:8081/api/v1/user";
        const token = localStorage.getItem('token');

        axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setUserDetails(response.data);
        })
        .catch(error => {
            setError(error.message);
        });
    }, []);

    return (
        <div className="fetch-details-container">
            <h2 className="fetch-details-title">User Details</h2>
            {error && <p className="fetch-details-error">Error fetching user details: {error}</p>}
            {userDetails && userDetails.message && <p>{userDetails.message}</p>}
            {userDetails && userDetails.data && userDetails.data.length > 0 && (
                <table className="fetch-details-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDetails.data.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {userDetails && !userDetails.data && <p>No user details available.</p>}
        </div>
    );
};

export default FetchUserDetails;
