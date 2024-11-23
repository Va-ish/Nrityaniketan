import React from 'react';

const AdmissionPage = () => {
  return (
    <section
    className="overflow-hidden bg-fixed"
  >
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 py-10">
      {/* Left Side: Big Circle */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2">
        {/* Big Circle */}
        <div className="w-11/12 bg-yellow-900 rounded-full flex items-center justify-center text-center shadow-xl p-6 relative">
          <div className="text-white px-4">
            <h2 className="text-2xl font-semibold meriendaspecial">Admission Details</h2>
            
            <div className="flex flex-col mt-4">
              <div className="flex items-start">
                <strong className="mr-2">Eligibility Criteria:</strong>
                <p>Students must be <span className="text-yellow-300">6+ years</span>.</p>
              </div>

              <div className="flex items-start mt-2">
                <strong className="mr-2">Admission Timing:</strong>
                <p>Admissions held only on <span className="text-yellow-300">Dusshera</span>.</p>
              </div>

              <div className="flex items-start mt-2">
                <strong className="mr-2">Course Duration:</strong>
                <p>A <span className="text-yellow-300">7-year journey</span> encompassing:</p>
              </div>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Technical mastery of Bharatnatyam.</li>
                <li>Understanding the Guru-Shishya Parampara.</li>
                <li>Stage presence, grace, and discipline.</li>
              </ul>

              <div className="flex items-start mt-2">
                <strong className="mr-2">Arangetram Ceremony:</strong>
                <p>A debut solo performance marking artistic maturity.</p>
              </div>
            </div>
          </div>

          {/* Single Small Circle */}
          {/* <div className="absolute -top-10 right-0 transform translate-x-1/2">
            <img
              src={courseImage}
              alt="Course"
              className="w-40 h-40 rounded-full shadow-lg"
              style={{ objectPosition: 'center 30%' }} 
            />
          </div> */}
        </div>
      </div>

      {/* Right Side: Title, Tagline, and Persuasive Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center mt-10 lg:mt-0 text-yellow-100">
      
            <h3 className="text-3xl font-semibold meriendaspecial">
              Enroll Now
            </h3>
            
        <h2 className="text-2xl  font-semibold mb-4">Step into the World of Graceful Traditions!</h2>
        <p className="text-lg mb-6 px-4">
          Join Nrityaniketan this Dusshera and start your journey to master the art of Bharatnatyam.
        </p>
        <p className="text-md px-4">
          Enroll in our 7-year course that blends tradition, discipline, and artistry. Complete your
          journey with a grand Arangetram ceremony – a true testament to your dedication and growth.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-900 text-yellow-100 rounded-full shadow-lg hover:bg-yellow-700 transition-all">
          Join Now
        </button>
      </div>
    </div>
    </section>
    
  );
};

export default AdmissionPage;
