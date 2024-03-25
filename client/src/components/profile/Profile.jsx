import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <div className="left">
        <div className="container">
          <div className="pic">
            <img src="" alt="" />
            <div className="add"></div>
          </div>
        </div>
        <div className="info">
          <span>Names</span>
          <span>proffession</span>
        </div>
        <div className="todo">
          <span>Create Profile</span>
          <span>Edit Profile</span>
          <span>Logout</span>
        </div>
      </div>
      <div className="right">
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Profile;
