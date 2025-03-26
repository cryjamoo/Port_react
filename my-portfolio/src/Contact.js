import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'; // นำเข้าไอคอนจาก React Icons
import './Contact.css'; // ใส่สไตล์

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-buttons">
        <a href="https://www.facebook.com/cryjam.cryjam/" target="_blank" rel="noopener noreferrer">
          <button className="contact-btn facebook-btn">
            <div className="icon-container">
              <FaFacebookF className="icon" />
            </div>
            <span className="button-text">Facebook</span>
          </button>
        </a>
        <a href="https://www.instagram.com/mizjakk/" target="_blank" rel="noopener noreferrer">
          <button className="contact-btn instagram-btn">
            <div className="icon-container">
              <FaInstagram className="icon" />
            </div>
            <span className="button-text">Instagram</span>
          </button>
        </a>
        <a href="mailto:xboqqdidi@gmail.com">
          <button className="contact-btn email-btn">
            <div className="icon-container">
              <FaEnvelope className="icon" />
            </div>
            <span className="button-text">Email</span>
          </button>
        </a>
        <a href="https://github.com/cryjamoo" target="_blank" rel="noopener noreferrer">
          <button className="contact-btn github-btn">
            <div className="icon-container">
              <FaGithub className="icon" />
            </div>
            <span className="button-text">GitHub</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
