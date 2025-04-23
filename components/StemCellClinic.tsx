import React from 'react';

const StemCellClinic: React.FC = () => {
  return (
    <section className="bg-white text-black py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stem Cell Therapy and Treatment Clinics in Gurugram & Rishikesh, India: The Future of Medicine
          </h2>

          <p className="mb-4">
            Have you considered <strong>stem cell therapy in Gurugram and Rishikesh, India</strong> but haven’t found the top reputable center?
            Well, QA Stem Cell Center is now available in both locations to provide you with the best stem cell therapy and treatment.

            Our clinics are equipped with the latest technology and staffed by a team of experienced professionals dedicated to providing you with the highest quality care.
            We understand that every patient is unique, and we take the time to develop a personalized treatment plan that meets your specific needs.
          </p>

        
        </div>

        {/* Right Column: Images */}
        <div className="space-y-6">
          <img
            src="/images/image.jpg"
            alt="Happy patients at QA Stem Cell Center Clinic"
            className="w-full rounded-lg shadow-md h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StemCellClinic;
