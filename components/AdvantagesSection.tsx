import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const AdvantagesSection: React.FC = () => {
  return (
    <section className="bg-white text-[#04343c] py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#026873]">
            Advantages Of Choosing QA Stem Cell Center
          </h2>

          <p className="mb-6 text-gray-700">
            Choosing QA Stem Cell Center for stem cell treatment in India provides access to leading regenerative medicine benefits.
          </p>

          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            <li className="flex items-start">
              <FaAngleRight className="text-red-500 mr-2 mt-1" />
              <span>
                <strong>Advanced Technology and Techniques:</strong> We lead in stem cell research with advanced technology and top equipment. Our continuously trained team ensures innovative, effective treatments.
              </span>
            </li>

            <li className="flex items-start">
              <FaAngleRight className="text-red-500 mr-2 mt-1" />
              <span>
                <strong>Personalized Treatment:</strong> We provide personalized therapies based on each patient’s unique needs and goals. 
              </span>
            </li>

            <li className="flex items-start">
              <FaAngleRight className="text-red-500 mr-2 mt-1" />
              <span>
                <strong>Comprehensive Care:</strong> We guide patients from diagnosis to recovery, ensuring continuity for optimal results.
              </span>
            </li>

            <li className="flex items-start">
              <FaAngleRight className="text-red-500 mr-2 mt-1" />
              <span>
                <strong>Safety and Ethics:</strong> QA Stem Cell Center follows strict international safety standards. We ensure transparency, informed consent, and use ethically sourced stem cells while protecting privacy.
              </span>
            </li>

           
          </ul>

          
        </div>

        {/* Right: Doctor Image */}
        <div>
          <img
            src="/images/image11.png"
            alt="Doctor Team"
            className="rounded-lg shadow-md w-full object-cover h-[500px] "
          />
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
