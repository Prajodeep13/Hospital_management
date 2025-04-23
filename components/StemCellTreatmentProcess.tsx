import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const StemCellTreatmentProcess: React.FC = () => {
  return (
    <section className="bg-white text-[#04343c] py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Image */}
        <div className="w-full">
          <img
            src="/images/image10.png"
            alt="Stem Cell Therapy Process"
            className="rounded-lg shadow-lg w-full object-cover h-[400px]"
          />
          <ul className="mt-6 space-y-3 text-sm text-[#04343c] font-medium">
            <li className="flex items-start"><FaAngleRight className="text-red-500 mr-2 mt-1" /> Intravenous Infusion</li>
            <li className="flex items-start"><FaAngleRight className="text-red-500 mr-2 mt-1" /> Nebulizer</li>
            <li className="flex items-start"><FaAngleRight className="text-red-500 mr-2 mt-1" /> Site-Specific Injections</li>
            <li className="flex items-start"><FaAngleRight className="text-red-500 mr-2 mt-1" /> Intrathecal</li>
            <li className="flex items-start"><FaAngleRight className="text-red-500 mr-2 mt-1" /> Intranasal</li>
          </ul>
        </div>

        {/* Right Side: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#026873] mb-6">
            Our Stem Cell Treatment Process
          </h2>
          <p className="mb-6 text-gray-700">
            QA Stem Cell Center follows a personalized approach to ensure safety, efficacy, and patient satisfaction.
          </p>

          <div className="space-y-4 text-gray-800 text-sm md:text-base">
            <p className="flex items-start">
              <FaAngleRight className="text-red-500 mr-2 mt-1" />
              <span><strong>Initial Consultation:</strong> We review your medical history, assess eligibility, and may recommend diagnostic tests.</span>
            </p>

            <p className="flex items-start">
              <FaAngleRight className="text-red-500 mr-2 mt-1" />
              <span><strong>Treatment Planning:</strong> We create a personalized plan tailored to your condition and goals.</span>
            </p>

            <p className="flex items-start">
              <FaAngleRight className="text-red-500 mr-2 mt-1" />
              <span><strong>Stem Cell Preparation:</strong> We process the donated umbilical cord stem cells for maximum therapeutic potential.</span>
            </p>

            <p className="flex items-start">
              <FaAngleRight className="text-red-500 mr-2 mt-1" />
              <span><strong>Treatment Administration:</strong> The stem cell treatment is administered by our Gurugram and Rishikesh doctors via various delivery methods.</span>
            </p>

            <p className="mt-6 text-gray-600">
              Our physicians use imaging guidance for precise delivery when necessary. Most procedures are outpatient.
            </p>

            <p className="mt-4 text-gray-700 font-semibold">
              <FaAngleRight className="text-red-500 mr-2 inline-block" />
              Post-Treatment Care:
              <span className="font-normal text-gray-700"> We provide recovery instructions and follow-up appointments to track progress and adjust your plan.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StemCellTreatmentProcess;
