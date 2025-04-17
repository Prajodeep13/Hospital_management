import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const categories = [
  {
    title: 'Diseases',
    image: '/images/image6.webp',
    items: [
      'Diabetes Mellitus – Type 1',
      'Diabetes Mellitus – Type 2',
      'Crohn’s Disease',
      'COPD',
      'Hepatitis B',
      'Hepatitis C',
      'Fatty Liver',
      'Liver Insufficiency',
      'Child Pugh A and B',
      'Peripheral Artery Disease',
    ],
  },
  {
    title: 'Musculoskeletal',
    image: '/images/image7.png',
    items: [
      'Tendonitis – Shoulder, Elbow, Hip, Achilles',
      'Golfer’s or Tennis Elbow',
      'Ligament Sprains',
      'Bursitis (e.g. hip)',
      'Osteoarthritis & Rheumatoid Arthritis',
      'Back and Neck Pain',
      'Cartilage Defects',
      'SI Joint Inflammation or Arthritis',
    ],
  },
  {
    title: 'Autoimmune And GI',
    image: '/images/image8.png',
    items: [
      'Rheumatoid Arthritis',
      'Fibromyalgia',
      'Psoriasis',
      'Lupus',
      'Lyme Disease',
      'Crohn’s Dz',
      'Ulcerative Colitis, IBD',
      'Diabetes',
      'Scleroderma',
      'Ankylosing Spondylitis',
    ],
  },
  {
    title: 'Neurologic',
    image: '/images/image9.png',
    items: [
      'Ataxia',
      'Anti Aging Procedure',
      'Headaches & Migraines',
      'Parkinson’s Disease',
      'Alzheimer’s Disease',
      'Multiple Sclerosis',
      'Post-Stroke Rehabilitation',
      'Autism',
      'Occipital Neuralgia',
      'Peripheral & Diabetic Neuropathy',
    ],
  },
];

const ConditionsTreated: React.FC = () => {
  return (
    <section className="bg-[#04343c] text-white py-12 px-4 md:px-12">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-cyan-200 mb-12">
        QA Stem Cell Center May Help These Conditions With Stem Cell Therapy
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white border border-cyan-700 rounded-lg shadow-md p-4 flex flex-col items-start text-[#04343c]"
          >
            <img
              src={category.image}
              alt={`${category.title} image`}
              className="w-full h-40 object-cover object-center rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-cyan-900 mb-2">{category.title}</h3>
            <ul className="space-y-2 text-sm text-[#04343c]">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <FaAngleRight className="text-red-600 mt-1 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConditionsTreated;
