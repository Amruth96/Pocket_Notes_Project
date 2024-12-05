import React from "react";
import "./Maincontent.css"; 

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="illustration">
        <img
          src="./img1.jpg"
          alt="Illustration"
          className="placeholder-image"
        />
      </div>
      <h1>Pocket Notes</h1>
      <p className="description">
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone.
      </p>
      <p className="encryption">🔒 end-to-end encrypted</p>
    </div>
  );
};

export default MainContent;
