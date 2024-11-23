import React from 'react';
import About from '../components/About';
import AdmissionPage from '../components/Admission';
import Main from '../components/Main';
import Gallery from '../components/Galary';
import { Header } from '../components/Header';

const HomePage = () => {
  return (
    <div
      className="flex flex-col bg-fixed space-y-8"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
    >
      <div className="relative z-10">
        <Header />
      </div>
      
      <div className="relative z-10">
        <Main />
      </div>
      <div className="relative z-10">
        <About />
      </div>
      <div className="relative z-10">
        <Gallery />
      </div>
      <div className="relative z-10">
        <AdmissionPage />
      </div>
    </div>
  );
};

export default HomePage;
