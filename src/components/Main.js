import React, { useState, useEffect } from 'react';
import bgImage from '../assets/10345-Photoroom.png';

const Main = () => {
  
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prevShowFirst) => !prevShowFirst);
    },3000);

    return() => clearInterval(interval);
  }, []);

  

  return (
    <section
      className="relative h-screen w-full bg-fixed"
    >

      <div className="flex h-full items-center justify-center relative">
       
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-[50%] h-auto object-cover opacity-10"
          style={{ zIndex: -1 }} // Behind the text
        />

        <div className="text-yellow-100 text-center relative z-10">
          <h2 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold meriendaspecial">
            Nrityaniketan
          </h2>
          <br />
          <div className="flex items-center justify-center space-x-4 mb-8">
            <hr className="w-48 h-1 bg-yellow-100 border-0 rounded" />
            <h3 className="text-3xl font-semibold suse">
              Bharatnatyam Institute
            </h3>
            <hr className="w-48 h-1 bg-yellow-100 border-0 rounded" />
          </div>

          <h4
  className={`mb-6 text-xl font-semibold fade ${
    showFirst ? "" : "fade-hidden"
  }`}
>
  {showFirst ? "Rhythms of Heritage, Movements of Grace" : "Embrace the Art of Bharatnatyam"}
</h4>


        
        </div>
      </div>
    </section>
  );
};

export default Main;
