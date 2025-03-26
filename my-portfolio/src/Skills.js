import React from "react";
import "./Skills.css"; // นำเข้า CSS

// นำเข้ารูปภาพ
import profile1 from './assets/images/html.png';
import profile2 from './assets/images/js.png';
import profile3 from './assets/images/React.png';
import profile4 from './assets/images/css.png';
import profile5 from './assets/images/njs.png';

const skillsData = [
  {
    title: "HTML",
    description: "พื้นฐาน HTML",
    imageUrl: profile1,
  },
  {
    title: "Java Scipt",
    description: "พื้นฐาน Java Scipt",
    imageUrl: profile2,
  },
  {
    title: "React",
    description: "พื้นฐาน React",
    imageUrl: profile3,
  },
  {
    title: "CSS",
    description: "พื้นฐาน CSS",
    imageUrl: profile4,
  },
  {
    title: "NodeJS",
    description: "พื้นฐาน NodeJS",
    imageUrl: profile5,
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-cards-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-profile-image">
              <img src={skill.imageUrl} alt={skill.title} />
            </div>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;