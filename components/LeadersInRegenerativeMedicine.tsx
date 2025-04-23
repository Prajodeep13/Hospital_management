import React from 'react'; 

const LeadersInRegenerativeMedicine: React.FC = () => {
  return (
    <section className="bg-[#04343c] text-white py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 mb-6">
            QA Stem Cell Center: Leaders In Regenerative Medicine
          </h2>

          <p className="mb-4 text-gray-300">
            QA Stem Cell Center provides advanced <strong className="text-white">stem cell and exosome treatments</strong>,
            staying at the forefront of regenerative medicine research.
          </p>

          <p className="mb-4 text-gray-300">
            Our Gurugram and Rishikesh center, equipped with the latest technology and staffed by expert physicians,
            follows international safety and ethical standards.
          </p>

          <p className="mt-6 font-semibold text-cyan-100">Our Mission</p>
          <p className="mb-4 text-gray-300">
            We aim to improve quality of life for those with chronic conditions and injuries
            by making regenerative therapies accessible and affordable.
          </p>
          <p className="mb-6 text-gray-300">
            Our goal is to become India’s leading stem cell treatment provider, setting new standards of excellence.
          </p>

          <p className="mt-6 font-semibold text-cyan-100">Facilities And Team</p>
        
        </div>

        {/* Right Side Image */}
        <div className="w-full">
          <img
            src="/images/image5.jpg"
            alt="Regenerative Medicine Banner"
            className="rounded-lg shadow-lg w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadersInRegenerativeMedicine;
