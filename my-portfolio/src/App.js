import React from 'react';
import './App.css'; // นำเข้าไฟล์ CSS สำหรับตกแต่ง
import profileImg from './images/fr.jpg'; // นำเข้ารูปโปรไฟล์

// คอมโพเนนต์ Header
const Header = () => {
  return (
    <header>
      <h1>ยินดีต้อนรับสู่ Portfolio ของฉัน</h1>
    </header>
  );
};

// คอมโพเนนต์ About Me
const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>เกี่ยวกับฉัน</h2>
      <img src={profileImg} alt="Profile" className="profile-img" /> {/* แสดงรูปโปรไฟล์ */}
      <p>ฉันเป็นนักพัฒนาเว็บที่มีประสบการณ์ในการสร้างแอปพลิเคชันเว็บด้วย React และเทคโนโลยีที่เกี่ยวข้อง...</p>
    </section>
  );
};

// คอมโพเนนต์ Projects
const Projects = () => {
  return (
    <section id="projects">
      <h2>โปรเจกต์ของฉัน</h2>
      <ul>
        <li><a href="https://github.com/your-username/project-1" target="_blank" rel="noopener noreferrer">โปรเจกต์ 1</a></li>
        <li><a href="https://github.com/your-username/project-2" target="_blank" rel="noopener noreferrer">โปรเจกต์ 2</a></li>
        <li><a href="https://github.com/your-username/project-3" target="_blank" rel="noopener noreferrer">โปรเจกต์ 3</a></li>
      </ul>
    </section>
  );
};

// คอมโพเนนต์ Footer
const Footer = () => {
  return (
    <footer>
      <p>ติดต่อฉัน: email@example.com</p>
    </footer>
  );
};

// คอมโพเนนต์หลัก
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
