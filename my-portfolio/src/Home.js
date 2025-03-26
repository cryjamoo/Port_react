import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/student.jpg",
    "/images/4.jpg",
    "/images/ME.jpg",
    "/images/1.jpg"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  return (
    <div className="home-background">
      {/* เพิ่มแสงระยิบระยับ */}
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>

      <div className="home-content-box">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        

        <div className="home-image-wrapper">
          <button className="image-button prev" onClick={prevImage}>←</button>
          <img
            src={images[currentImageIndex]}
            alt="Profile"
            className="home-profile-image"
          />
          <button className="image-button next" onClick={nextImage}>→</button>
        </div>

        <p className="home-description">By Jakkaphan Jardthongkham</p>

        <button
          className="home-profile-button"
          onClick={() => window.location.href = '/profile'}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Home;
