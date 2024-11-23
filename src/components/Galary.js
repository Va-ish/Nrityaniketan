import React from 'react';
import { Header } from './Header';
import Img1 from '../assets/arangetram.jpg';
import Img2 from '../assets/awardFunction.jpg';
import Img3 from '../assets/awardVaish.JPG';
import Img4 from '../assets/backstage.JPG';
import Img5 from '../assets/guruGalary.jpg';
import Img6 from '../assets/natrajaGalary.jpg';
import Img7 from '../assets/stagePerformance.jpg';
import Img8 from '../assets/groupPose.JPG';
import Img9 from '../assets/dusCelebration.jpg';
import Img10 from '../assets/classPractice.jpg';

const Gallery = () => {
  const galleryItems = [
    { src: Img1, description: 'Arangetram Performance' },
    { src: Img2, description: 'Award Function' },
    { src: Img3, description: 'Special Award Ceremony' },
    { src: Img4, description: 'Backstage Moments' },
    { src: Img5, description: 'Guru Gallery' },
    { src: Img6, description: 'Natraja Gallery' },
    { src: Img7, description: 'Stage Performance' },
    { src: Img8, description: 'Group Pose' },
    { src: Img9, description: 'Dussera Celebration' },
    { src: Img10, description: 'Class Practice' },
  ];

  return (
    <section className=" overflow-scroll bg-fixed">
      <div className="flex items-center justify-center mt-9 mb-6">
        <hr className="w-36 h-1 bg-yellow-100 border-0 rounded" />
        <h3 className="text-4xl text-yellow-100 font-semibold mx-4 meriendaspecial">
          Gallery
        </h3>
        <hr className="w-36 h-1 bg-yellow-100 border-0 rounded" />
      </div>
      <p className="text-center text-yellow-100 text-lg mb-8">
        "Capturing Moments, Celebrating Traditions."
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg shadow-lg p-2 border border-yellow-100"
          >
            <img
              src={item.src}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-md w-full h-auto mb-2"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <p className="text-yellow-100 text-sm text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
