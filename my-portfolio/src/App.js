import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // เพิ่มการนำเข้า Navbar

import Home from './Home';
import Profile from './Profile';
import Skills from './Skills';
import Contact from './Contact';
import Education from './Education';

const App = () => {
  return (
    <Router>
      <Navbar />  {/* แสดง Navbar ทุกหน้า */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
};

export default App;
