// ParentComponent.jsx
import React, { useState } from "react";
import { Profileex, Profile1 } from "./"; // Update the import paths as needed

function ParentComponent() {
  const [profileData, setProfileData] = useState({});

  const handleProfileSubmit = (data) => {
    setProfileData(data);
  };

  return (
    <div>
      <Profileex onSubmit={handleProfileSubmit} />
      <Profile1 data={profileData} />
    </div>
  );
}

export default ParentComponent;
