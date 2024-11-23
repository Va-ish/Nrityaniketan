import React from 'react';
import bgImage from "../assets/bharatnatyamClass.jpeg";
import dedicationImage from "../assets/manyhandspose.jpg"; // Replace with actual image path
import excellenceImage from "../assets/ghungrooLegs.jpg"; // Replace with actual image path
import integrityImage from "../assets/closeup.jpeg"; // Replace with actual image path

const About = () => {
  return (
    <section className="w-3/4 mx-auto bg-yellow-900 rounded-lg shadow-2xl mt-4 py-4"
    >
      {/* Section Header */}
      <div className="flex items-center justify-center mt-9 mb-6">
        <hr className="w-40 h-1 bg-yellow-100 border-0 rounded" />
        <h3 className="text-4xl text-yellow-100 font-semibold mx-4 meriendaspecial">
          About Us
        </h3>
        <hr className="w-40 h-1 bg-yellow-100 border-0 rounded" />
      </div>

      {/* Content Section */}
      <div className="flex h-[250px] bg-yellow-900 overflow-hidden">
        {/* Left: Image with gradient blending */}
        <div
          className="w-1/2 h-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-yellow-900 to-transparent"></div>
        </div>

        {/* Right: Text Section */}
        <div className="w-1/2 flex items-center justify-center px-8 py-6">
          <div className="max-w-lg text-yellow-100">
            <p className="text-md leading-relaxed">
              Founded in 1994 by Smt. Meenakshi Ramaswamy, Nrityaniketan is a
              beacon of tradition and excellence in Bharatnatyam. Rooted in the
              ancient <em>Guru-Shishya Parampara</em>, the institute preserves
              the rich heritage of classical dance while nurturing every student’s
              individuality. Known for its unique blend of rigorous training and
              artistic expression, Nrityaniketan stands as a sanctuary for those
              who seek to embrace the grace, discipline, and spiritual depth of
              Bharatnatyam.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="text-center my-12">
        <h3 className="text-3xl text-yellow-100 font-semibold mb-6 meriendaspecial">
          Our Values
        </h3>
        <div className="flex justify-between space-x-6 m-4">
          {/* Value 1 */}
          <div className="w-1/3 flex flex-col items-center border bg-gradient-to-r from-yellow-900 via-blue-500 to-amber-500  border-yellow-100 text-yellow-100 rounded-md p-4">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
              <img
                src={dedicationImage}
                alt="Dedication"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Dedication to Tradition</h4>
            <p className="text-md text-center">
              Preserving the timeless beauty of Bharatnatyam through the ancient 
              <em> Guru-Shishya Parampara</em>.
            </p>
          </div>

          {/* Value 2 */}
          <div className="w-1/3 flex flex-col items-center bg-gradient-to-r from-yellow-900 via-purple-500 to-amber-500 border border-yellow-100 text-yellow-100 rounded-md p-4">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
              <img
                src={excellenceImage}
                alt="Excellence"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Artistic Excellence</h4>
            <p className="text-md text-center">
              Fostering creativity, precision, and grace in every movement and
              performance.
            </p>
          </div>

          {/* Value 3 */}
          <div className="w-1/3 flex flex-col items-center bg-gradient-to-r from-yellow-900 via-blue-500 to-amber-500 border border-yellow-100 text-yellow-100 rounded-md p-4">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
              <img
                src={integrityImage}
                alt="Integrity"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Integrity and Authenticity</h4>
            <p className="text-md text-center">
              Staying true to the roots of Bharatnatyam while adapting gracefully
              to modern expressions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
