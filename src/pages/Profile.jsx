import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

import "../stylesheets/profile.css";
const Profile = ({ user }) => {
  console.log(user);
  const handleLogout = async () => {
    const confirmation = confirm("Are you sure you want to logout?");

    if (confirmation) {
      try {
        await signOut(auth);
      } catch (error) {
        console.log("error while signing out:", error);
      }
    }
  };

  return (
    <div className="profile-page">
      {user ? (
        <div className="profile-container">
          <img src={user.photoURL} className="profile-image" />
          <p>
            <span>Name:</span> {user.displayName}
          </p>
          <p>
            <span>Email:</span> {user.email}
          </p>
          <p>
            <span>Account Created Now: </span> {user.metadata.creationTime}
          </p>

          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Profile;
