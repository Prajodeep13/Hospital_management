'use client';

import React from 'react';

const researchAreas = [
  { title: 'Orthopedic Treatments', image: '/images/icon1.jpg' },
  { title: 'Anti-Aging Therapy', image: '/images/icon2.jpg' },
  { title: 'Neurological Disorders', image: '/images/icon3.jpg' },
  { title: 'Diabetes Treatment', image: '/images/icon4.jpg' },
  { title: 'Autoimmune Diseases', image: '/images/icon5.jpg' },
  { title: 'Cardiovascular Treatment', image: '/images/icon6.jpg' },
  { title: 'Liver Disease Therapy', image: '/images/icon7.jpg' },
  { title: 'Kidney Disease Treatment', image: '/images/icon8.jpg' },
  { title: 'COPD & Lung Disorders', image: '/images/icon9.jpg' },
  { title: 'Hair Regeneration', image: '/images/icon10.jpg' },
  { title: 'Erectile Dysfunction', image: '/images/icon11.jpg' },
  { title: 'Female Infertility', image: '/images/icon2.jpg' },

];

const ResearchAreas: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {researchAreas.map((area, idx) => (
          <div
            key={idx}
            className="h-40 sm:h-44 md:h-48 rounded-md shadow-md flex items-center justify-center text-white text-center text-lg font-bold relative overflow-hidden"
          >
            {/* Fixed background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${area.image})`,
                backgroundAttachment: 'fixed',
                zIndex: 0,
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
            {/* Title text */}
            <span className="z-20 px-4 py-2">{area.title}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {/* <button className="bg-cyan-800 hover:bg-cyan-600 text-white px-6 py-3 rounded shadow">
          ALL TREATMENTS
        </button> */}
      </div>
    </section>
  );
};

export default ResearchAreas;
