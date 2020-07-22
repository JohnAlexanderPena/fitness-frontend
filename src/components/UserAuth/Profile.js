import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import profileHolder from "../../assets/avatar.webp";
import ImageUploader from "react-images-upload";

const Profile = () => {
  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    setPictures({
      picture,
    });
  };

  console.log(pictures);

  const currentUser = AuthService?.getCurrentUser();
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong>
          <img
            className="profile-placeholder"
            src={profileHolder}
            alt="placeholder"
          />
        </h3>
        {/* <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={onDrop}
          imgExtension={[".jpeg", ".png", ".gif", "jpg"]}
          maxFileSize={5242880}
        /> */}
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
