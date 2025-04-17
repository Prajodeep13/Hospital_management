import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const HowStemCellTherapyWorks: React.FC = () => {
  return (
    <section className="bg-[#04343c] text-white py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-200">
            How Stem Cell Therapy Works?
          </h2>
          <p className="mb-6 text-gray-200 text-base">
            The process of stem cell therapy at QA Stem Cell Center is both sophisticated and personalized.
            Here’s a breakdown of how it works:
          </p>

          <div className="space-y-5 text-sm md:text-base">

            <div>
              <p className="font-semibold flex items-start text-cyan-100">
                <FaAngleRight className="text-red-600 mr-2 mt-1" />
                Thorough Evaluation:
              </p>
              <p className="ml-6 text-gray-300">
                We begin with a comprehensive assessment of each patient’s condition and medical history.
              </p>
            </div>

            <div>
              <p className="font-semibold flex items-start text-cyan-100">
                <FaAngleRight className="text-red-600 mr-2 mt-1" />
                Personalized Treatment Plan:
              </p>
              <p className="ml-6 text-gray-300">
                Based on the evaluation, our expert team develops a tailored treatment strategy. This may include a
                combination of umbilical cord mesenchymal stem cells, stem cell exosomes, and platelet-rich plasma therapy (PRP).
              </p>
            </div>

            <div>
              <p className="font-semibold flex items-start text-cyan-100">
                <FaAngleRight className="text-red-600 mr-2 mt-1" />
                Minimally Invasive Procedure:
              </p>
              <p className="ml-6 text-gray-300">
                The therapy involves administering high-quality umbilical cord-derived mesenchymal cells through minimally invasive techniques such as injections, nebulizers, intranasal, intrathecal, or intravenous applications.
              </p>
            </div>

            <div>
              <p className="font-semibold flex items-start text-cyan-100">
                <FaAngleRight className="text-red-600 mr-2 mt-1" />
                Cellular Action:
              </p>
              <ul className="ml-6 mt-2 space-y-1 text-gray-300">
                <li className="flex items-start"><FaAngleRight className="text-red-600 mt-1 mr-2" />Modulating the immune system</li>
                <li className="flex items-start"><FaAngleRight className="text-red-600 mt-1 mr-2" />Reducing inflammation</li>
                <li className="flex items-start"><FaAngleRight className="text-red-600 mt-1 mr-2" />Promoting tissue repair</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold flex items-start text-cyan-100">
                <FaAngleRight className="text-red-600 mr-2 mt-1" />
                Healing Process:
              </p>
              <ul className="ml-6 mt-2 space-y-1 text-gray-300">
                <li className="flex items-start"><FaAngleRight className="text-red-600 mt-1 mr-2" />Modulating the immune system</li>
                <li className="flex items-start"><FaAngleRight className="text-red-600 mt-1 mr-2" />Reducing inflammation</li>
                <li className="flex items-start"><FaAngleRight className="text-red-600 mt-1 mr-2" />Promoting tissue repair</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="/images/image3.jpg"
            alt="Regenerative Medicine Process"
            className="rounded-lg shadow-lg w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HowStemCellTherapyWorks;
