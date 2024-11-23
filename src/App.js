import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/HomePage';
import About from './components/About';
import Gallery from './components/Galary';
import Admission from './components/Admission';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
