'use client';

import React, { useEffect, useRef, useState } from 'react';

const treatmentData = [
  {
    icon: "👶",
    category: "Pediatric Neurology",
    treatments: ["Autism Treatment", "Cerebral Palsy", "Developmental Delay"],
  },
  {
    icon: "🧠",
    category: "Neurological Conditions",
    treatments: [
      "Multiple Sclerosis", "ALS", "MND", "Parkinson Disease",
      "Alzheimer", "Dementia", "Stroke", "Injuries of Spinal Cord", "Injuries of Brain",
    ],
  },
  {
    icon: "🫁",
    category: "Respiratory Diseases",
    treatments: ["COPD", "Asthma", "Pulmonary Fibrosis", "Allergies / Sinusitis"],
  },
  {
    icon: "🦴",
    category: "Musculoskeletal Disorders",
    treatments: ["Arthritis", "Dystrophy", "Back Pain", "Neuropathy"],
  },
  {
    icon: "🧍‍♂️",
    category: "Multisystem Diseases",
    treatments: ["Multiple System Atrophy", "Chronic Fatigue", "Lyme", "Lupus"],
  },
  {
    icon: "🧬",
    category: "Endocrine Diseases",
    treatments: ["Diabetes Type 2", "Metabolic Syndrome", "Hashimoto's"],
  },
  {
    icon: "👩‍❤️‍👨",
    category: "Reproductive System Diseases",
    treatments: ["Peyronie’s", "Infertility", "Erectile Dysfunction", "Recto-vaginal Fistula"],
  },
  {
    icon: "❤️",
    category: "Cardiovascular Diseases",
    treatments: ["Hypertension", "Cerebral Vessel Disease", "Heart Attack"],
  },
  {
    icon: "👁️",
    category: "Sensory Disorders",
    treatments: ["Tinnitus", "Deafness", "Glaucoma", "Retinitis", "Optic Nerve Degeneration"],
  },
  {
    icon: "🫀",
    category: "Abdominal Organ Diseases",
    treatments: ["Crohn’s Disease", "Liver Cirrhosis", "Pancreatitis", "Chronic Kidney Failure"],
  },
  {
    icon: "🧪",
    category: "Anti-Aging and Wellbeing",
    treatments: [
      "Burns", "Scar", "Skin pigmentation", "Wrinkles", "Psoriasis",
      "Reproductive life extension", "Cancer Rehabilitation", "Cancer Prevention", "Sports injuries"
    ],
  },
  {
    icon: "🧴",
    category: "Skin Conditions",
    treatments: [
      "Vitiligo",
      "Eczema",
      "Rosacea",
      "Chronic Wounds",
      "Hyperpigmentation",
      "Alopecia Areata"
    ]
  },
  {
    icon: "🧫",
    category: "Liver Diseases",
    treatments: [
      "Fatty Liver Disease",
      "Autoimmune Hepatitis",
      "Hepatitis B",
      "Hepatitis C",
      "Wilson’s Disease",
      "Liver Cirrhosis"
    ]
  },
  {
    icon: "👓",
    category: "Eye Disorders",
    treatments: [
      "Cataracts",
      "Macular Degeneration",
      "Diabetic Retinopathy",
      "Uveitis",
      "Dry Eye Syndrome",
      "Keratoconus"
    ]
  },
  {
    icon: "🍽️",
    category: "Gastrointestinal Disorders",
    treatments: [
      "Irritable Bowel Syndrome (IBS)",
      "Gastroesophageal Reflux Disease (GERD)",
      "Celiac Disease",
      "Ulcerative Colitis",
      "Gallstones",
      "Chronic Gastritis"
    ]
  },

  {
    icon: "🦠",
    category: "Bone Marrow Disorders",
    treatments: [
      "Aplastic Anemia",
      "Thalassemia",
      "Sickle Cell Disease",
      "Myelodysplastic Syndromes (MDS)",
      "Leukemia (Supportive)",
      "Pure Red Cell Aplasia"
    ]
  },

  {
    icon: "🧬",
    category: "Autoimmune Skin Disorders",
    treatments: [
      "Scleroderma",
      "Pemphigus Vulgaris",
      "Lichen Planus",
      "Bullous Pemphigoid",
      "Dermatomyositis",
      "Cutaneous Lupus"
    ]
  },
  
  
  
  
  
  
];

const HolisticDiseaseComponent: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [scrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const rightPanel = rightRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (!wrapper || !rightPanel) return;

      const { scrollTop, scrollHeight, clientHeight } = rightPanel;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 2;
      const atTop = scrollTop === 0;

      if (scrollLocked) {
        if (
          (e.deltaY > 0 && !atBottom) ||
          (e.deltaY < 0 && !atTop)
        ) {
          rightPanel.scrollTop += e.deltaY;
          e.preventDefault();
        } else if (atBottom && e.deltaY > 0) {
          setScrollLocked(false);
        }
      }
    };

    const lockScrollOnEnter = () => setScrollLocked(true);

    wrapper?.addEventListener('mouseenter', lockScrollOnEnter);
    wrapper?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      wrapper?.removeEventListener('mouseenter', lockScrollOnEnter);
      wrapper?.removeEventListener('wheel', handleWheel);
    };
  }, [scrollLocked]);

  return (
    <div ref={wrapperRef} className="relative z-10">
      <div className="flex h-screen bg-white overflow-hidden flex-col lg:flex-row">
        {/* Left Section - Fixed on Large Screens */}
        <aside className="lg:w-[50%] w-full p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-start sticky top-0 bg-white z-20 lg:ml-[200px]">
          <h2 className="text-2xl lg:text-6xl font-extrabold mb-6 leading-tight text-cyan-900">
            What diseases can we treat <br className="hidden lg:block" /> with the holistic approach?
          </h2>
          <div className="text-gray-700 space-y-4 text-[1rem] leading-7">
            <p>
              We design and implement a comprehensive and individually tailored care plan
              that treats the entire person – body, mind and soul.
            </p>
            <p>
              For some cases, applying only stem cells may not be enough.
              Cell therapy works more effectively when combined with other therapeutic methods.
            </p>
            <p>
              We've seen various levels of recovery after treating the following diseases
              (including but not limited to):
            </p>
          </div>
        </aside>

        {/* Right Scrollable Section */}
        <div
          ref={rightRef}
          className="lg:w-[60%] w-full h-screen overflow-y-auto no-scrollbar"
        >
          <main className="px-6 md:px-12 lg:px-20 py-10 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {treatmentData.map((category, idx) => (
                <div key={idx}>
                  <div className="text-4xl mb-1">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-cyan-700 mb-2">
                    {category.category}
                  </h3>
                  <ul className="text-cyan-600 space-y-1 text-base ml-1">
                    {category.treatments.map((treat, tidx) => (
                      <li
                        key={tidx}
                        className="hover:text-cyan-800 cursor-pointer"
                      >
                        {treat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HolisticDiseaseComponent;
