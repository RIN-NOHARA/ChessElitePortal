// ViewProfile.jsx
import React from "react";
import Profile from "./Profile";

function ViewProfile({ data, onEdit }) {
  return (
    <div>
      <h1>View Profile</h1>
      <Profile data={data} onEdit={onEdit} />
    </div>
  );
}

export default ViewProfile;
