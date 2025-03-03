import React from 'react';
import './App.css';

// สร้างคอมโพเนนต์สำหรับส่วนต่างๆ
const Header = () => {
  return (
    <header>
      <h1>ยินดีต้อนรับสู่ Portfolio ของฉัน</h1>
    </header>
  );
};

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>เกี่ยวกับฉัน</h2>
      <p>ฉันเป็นนักพัฒนาเว็บที่มีประสบการณ์ในการสร้างแอปพลิเคชันเว็บด้วย React และเทคโนโลยีที่เกี่ยวข้อง...</p>
    </section>
  );
};

const Projects = () => {
  const projectList = [
    { name: 'โปรเจกต์ 1', description: 'รายละเอียดของโปรเจกต์ 1' },
    { name: 'โปรเจกต์ 2', description: 'รายละเอียดของโปรเจกต์ 2' },
    { name: 'โปรเจกต์ 3', description: 'รายละเอียดของโปรเจกต์ 3' },
  ];

  return (
    <section id="projects">
      <h2>โปรเจกต์ของฉัน</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <h2>ทักษะของฉัน</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>ติดต่อฉัน: email@example.com</p>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
