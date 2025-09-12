import React from "react";
import "../CSS/header.css"; // import styles

const Header = () => {
  return (
    <header className="header">
      <div className="slide slide1">
        <div className="overlay">
          <h1>Capturing Life’s Moments</h1>
          <p>Photography that tells your story</p>
        </div>
      </div>
      <div className="slide slide2">
        <div className="overlay">
          <h1>Memories That Last</h1>
          <p>From birthdays to weddings</p>
        </div>
      </div>
      <div className="slide slide3">
        <div className="overlay">
          <h1>Your Vision, My Lens</h1>
          <p>Professional and personal photography</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
