import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const WhatIsStemCellTherapy: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Image */}
        <div>
          <img
            src="/images/image2.jpg"
            alt="Stem cells illustration"
            className="w-full rounded-lg shadow-lg h-[400px] object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Is Stem Cell Therapy</h2>
          <p className="mb-4">
            Stem cell therapy is a path to recovery, not an instant cure. At QA Stem Cell Center,
            we support patients throughout their journey, from consultation to follow-up care.
          </p>

          <p className="mb-4">
            <strong>Mesenchymal stem cells (MSCs)</strong> are the workhorses of this therapy,
            possessing unique properties that make them ideal for treating various medical conditions.
            These cells have the remarkable ability to:
          </p>

          <ul className="space-y-2 text-base">
            <li className="flex items-start">
              <FaAngleRight className="text-red-500 mt-1 mr-2" />
              <span>Differentiate into various cell types</span>
            </li>
            <li className="flex items-start">
              <FaAngleRight className="text-red-500 mt-1 mr-2" />
              <span>Modulate the immune system</span>
            </li>
            <li className="flex items-start">
              <FaAngleRight className="text-red-500 mt-1 mr-2" />
              <span>Reduce inflammation</span>
            </li>
            <li className="flex items-start">
              <FaAngleRight className="text-red-500 mt-1 mr-2" />
              <span>Promote tissue repair</span>
            </li>
          </ul>

          <p className="mt-6 text-sm text-gray-600">
            By harnessing these capabilities, stem cell therapy offers hope for patients
            who have not found relief through traditional medical treatments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsStemCellTherapy;
