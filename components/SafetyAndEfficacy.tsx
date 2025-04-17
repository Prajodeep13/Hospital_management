import React from 'react';

const SafetyAndEfficacy: React.FC = () => {
  return (
    <section className="bg-white text-[#04343c] py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Image */}
        <div>
          <img
            src="/images/image12.png"
            alt="Safety and Support in Stem Cell Therapy"
            className="rounded-lg shadow-md w-full object-cover h-[400px]"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#026873] mb-6">
            Safety And Efficacy Of Stem Cell Therapy
          </h2>

          <p className="mb-4 text-gray-800">
            At QA Stem Cell Center, safety and efficacy are our top priorities. Our treatments follow rigorous research
            and clinical studies to ensure high standards.
          </p>

          <h4 className="font-semibold text-md md:text-lg mb-1">Clinical Studies and Research</h4>
          <p className="mb-4 text-gray-700">
            We incorporate the latest evidence-based practices and partner with leading research institutions,
            adhering to strict ethical and regulatory standards.
          </p>
       
        </div>
      </div>
    </section>
  );
};

export default SafetyAndEfficacy;
