import React, { useState } from "react";
import { Link } from "react-router-dom";  // นำเข้า Link
import "./Profile.css";  // ใส่สไตล์

const Profile = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/4.jpg",
    "/images/ME.jpg",
    "/images/1.jpg",
    "/images/3.jfif"
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="profile-container">
      <div className="profile-portfolio-content">
        <div className="profile-image-section">
          <img src={images[currentImageIndex]} alt="Profile" className="profile-profile-image" />
          <div className="image-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={index === currentImageIndex ? "dot active" : "dot"}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="profile-content-section">
          <h1>
            About <span>Me</span>
          </h1>
          <p>สวัสดีครับ ผมนายจักรพันธ์ จาดทองคำ ชื่อเล่นชื่อ แจม เกิดวันที่ 22 ตุลาคม พ.ศ. 2545 อายุ 22 ปี ปัจจุบันกำลังศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ สาขาวิชาเทคโนโลยีอิเล็กทรอนิกนิส์ แขนง คอมพิวเตอร์(ECT)
</p>

          
        </div>
      </div>
    </div>
  );
};

export default Profile;  // ใช้ export default
