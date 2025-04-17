import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const TypesOfStemCellsUsed: React.FC = () => {
  return (
    <section className="bg-[#04343c] text-white py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Image */}
        <div className="w-full">
          <img
            src="/images/image4.jpg"
            alt="Mesenchymal Stem Cell Diagram"
            className="w-full rounded-lg shadow-lg border border-gray-300"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-200">
            Types Of Stem Cells Used
          </h2>

          <p className="mb-4 text-gray-300">
            At QA Stem Cell Center, we prioritize the use of the most effective and ethically sourced stem cells.
            Our primary focus is on <strong className="text-white">mesenchymal stem cells (MSCs)</strong> derived from donated umbilical cords.
            Here’s why we choose this specific type:
          </p>

          <div className="space-y-4 text-base text-gray-200">
            <p className="flex items-start">
              <FaAngleRight className="text-red-600 mt-1 mr-2" />
              <span><strong className="text-white">High Potency:</strong> Umbilical cord-derived MSCs are known for their robust regenerative capabilities.</span>
            </p>

            <p className="flex items-start">
              <FaAngleRight className="text-red-600 mt-1 mr-2" />
              <span><strong className="text-white">Ethical Sourcing:</strong> These cells are obtained from scheduled c-sections, ensuring no harm to mother or child.</span>
            </p>

            <p className="flex items-start">
              <FaAngleRight className="text-red-600 mt-1 mr-2" />
              <span><strong className="text-white">Rigorous Screening:</strong> Donor mothers undergo extensive screening to guarantee the highest quality and safety of the stem cells.</span>
            </p>
          </div>

          <p className="mt-6 text-gray-300">
            <span className="text-red-600 font-semibold">Optimal Viability:</span> Umbilical cord stem cells are young and highly active, offering maximum therapeutic potential.
          </p>

          <p className="mt-4 text-gray-300">
            Our expert team of India stem cell specialists carefully selects the most appropriate stem cell type based on each patient’s specific condition and treatment goals. This personalized approach ensures we deliver the most effective and safest treatment possible.
          </p>

          <p className="mt-4 text-gray-400 text-sm">
            By combining advanced scientific knowledge with personalized care, QA Stem Cell Center is at the forefront of regenerative medicine, offering hope and healing to patients seeking innovative solutions for their health challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TypesOfStemCellsUsed;
